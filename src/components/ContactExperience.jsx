import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Stars,
  Float,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";
import { Computer } from "./Models/TechLogos/Computer-optimized";
import {
  PERFORMANCE_CONFIG,
  detectGPUPerformance,
} from "../lib/performanceConfig";

// Precarga el modelo para mejorar el rendimiento
useGLTF.preload("/models/computer-optimized.glb");

// Componente para luces animadas
const AnimatedLights = ({ optimized = false }) => {
  const pointLight1 = useRef();
  const pointLight2 = useRef();
  const spotLight = useRef();

  useFrame((state) => {
    // Solo animar si no estamos en modo optimizado
    if (optimized) return;

    const time = state.clock.getElapsedTime();

    // Animación sutil de las luces puntuales
    if (pointLight1.current) {
      pointLight1.current.intensity = 0.8 + Math.sin(time * 2) * 0.2;
      pointLight1.current.position.x = -5 + Math.sin(time * 0.5) * 1;
    }

    if (pointLight2.current) {
      pointLight2.current.intensity = 0.6 + Math.cos(time * 1.5) * 0.3;
      pointLight2.current.position.z = 5 + Math.cos(time * 0.8) * 1.5;
    }

    // Spotlight con movimiento sutil
    if (spotLight.current) {
      spotLight.current.intensity = 1 + Math.sin(time * 3) * 0.15;
      spotLight.current.position.x = Math.sin(time * 0.3) * 1.5;
      spotLight.current.position.z = Math.cos(time * 0.3) * 1.5;
    }
  });

  return (
    <>
      <ambientLight intensity={optimized ? 0.5 : 0.3} color="#e6f3ff" />
      <directionalLight
        position={[5, 5, 3]}
        intensity={optimized ? 1.5 : 2}
        color="#8b5cf6"
      />
      <directionalLight
        position={[5, 9, 1]}
        intensity={optimized ? 1.2 : 1.8}
        color="#3b82f6"
        castShadow={!optimized}
      />
      {!optimized && (
        <>
          <pointLight
            ref={pointLight1}
            position={[-5, 2, -5]}
            intensity={0.8}
            color="#a855f7"
          />
          <pointLight
            ref={pointLight2}
            position={[5, -2, 5]}
            intensity={0.6}
            color="#3b82f6"
          />
          <spotLight
            ref={spotLight}
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#6366f1"
            castShadow
          />

          {/* Luces adicionales para más vida */}
          <pointLight position={[0, 5, 8]} intensity={0.3} color="#ec4899" />
          <pointLight position={[-8, 3, 0]} intensity={0.4} color="#06b6d4" />
        </>
      )}
    </>
  );
};

// Componente para partículas flotantes misteriosas
const FloatingParticles = ({ optimized = false }) => {
  const particlesRef = useRef();

  useFrame((state) => {
    if (optimized || !particlesRef.current) return;

    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  // Reducir partículas en modo optimizado
  const particleCount = optimized ? 5 : 20;
  const particlePositions = Array.from({ length: particleCount }, () => [
    (Math.random() - 0.5) * 15,
    Math.random() * 8 + 1,
    (Math.random() - 0.5) * 15,
  ]);

  if (optimized) {
    return null; // No renderizar partículas en modo optimizado
  }

  return (
    <group ref={particlesRef}>
      {particlePositions.map((position, index) => (
        <Float
          key={index}
          speed={0.5 + Math.random() * 1}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <mesh position={position}>
            <sphereGeometry args={[0.03, 6, 6]} />
            <meshBasicMaterial
              color={
                index % 3 === 0
                  ? "#8b5cf6"
                  : index % 3 === 1
                  ? "#3b82f6"
                  : "#a855f7"
              }
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isDev, setIsDev] = useState(false);
  const [performanceLevel, setPerformanceLevel] = useState("medium");
  const [config, setConfig] = useState(PERFORMANCE_CONFIG.models.production);

  useEffect(() => {
    // Detectar si estamos en desarrollo
    setIsDev(import.meta.env.DEV);

    // Configurar según el entorno
    if (import.meta.env.DEV) {
      setConfig(PERFORMANCE_CONFIG.models.development);
    } else {
      setConfig(PERFORMANCE_CONFIG.models.production);
    }

    // Detectar rendimiento de GPU
    const performance = detectGPUPerformance();
    setPerformanceLevel(performance);

    // Si tenemos bajo rendimiento incluso en producción, aplicar optimizaciones
    if (performance === "low" && !import.meta.env.DEV) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        lowQuality: true,
        reduceLights: true,
      }));
    }
  }, []);

  // Si estamos en desarrollo y la configuración dice que usemos imagen estática
  // o si detectamos GPU de muy bajo rendimiento en móvil
  if (
    (isDev && config.useStaticImage) ||
    (performanceLevel === "low" && isMobile)
  ) {
    return (
      <div className="w-full h-full min-h-[700px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
        <img
          src="/images/bg.png"
          alt="3D Model Preview"
          className="w-full h-full object-contain opacity-70"
        />
        <div className="absolute bottom-5 left-5 bg-black-50 p-2 rounded text-xs text-white-50">
          3D model deactivated to boost performance.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[700px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas
        shadows={!config.lowQuality}
        camera={{
          position: [0, 3, 7],
          fov: 45,
        }}
        dpr={[config.dpr, config.dpr * 1.5]} // Ajustar resolución según configuración
        frameloop={config.frameOnDemand ? "demand" : "always"} // Solo renderiza cuando es necesario si está configurado
        gl={{
          powerPreference: "low-power",
          antialias: !config.lowQuality, // Deshabilita antialiasing en baja calidad
          depth: true,
          stencil: false, // Deshabilita stencil buffer para mejor rendimiento
          alpha: true,
        }}
        performance={{ min: 0.5 }} // Permite que la calidad se reduzca cuando el rendimiento es bajo
        onCreated={({ scene }) => {
          scene.background = new THREE.Color("#0f0f23");
          if (!config.lowQuality) {
            scene.fog = new THREE.Fog("#0f0f23", 8, 25);
          }
        }}
      >
        <Suspense fallback={null}>
          {/* Estrellas de fondo para ambiente misterioso - solo si no está optimizado */}
          {!config.skipEffects && (
            <Stars
              radius={100}
              depth={50}
              count={config.lowQuality ? 200 : 800}
              factor={4}
              saturation={0}
              fade
              speed={0.3}
            />
          )}

          {/* Luces animadas */}
          <AnimatedLights optimized={config.reduceLights} />

          {/* Partículas flotantes - solo si no está optimizado */}
          {!config.skipEffects && (
            <FloatingParticles optimized={config.lowQuality} />
          )}

          {/* Controls - Sin rotación en móviles para mejor experiencia de usuario */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile} // Desactivar rotación manual en móviles
            autoRotate={!isMobile} // Desactivar auto-rotación en móviles
            autoRotateSpeed={config.lowQuality ? 0.1 : 0.3}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            // Velocidad de rotación: 0 en móviles, normal en desktop
            rotateSpeed={isMobile ? 0 : 1}
            // Solo actualiza cuando se mueve en modo de bajo rendimiento
            enableDamping={!config.lowQuality}
          />

          {/* Computadora con animación flotante condicional */}
          {config.lowQuality ? (
            <group
              scale={0.025}
              position={[0, -1.5, -2]}
              castShadow={!config.lowQuality}
            >
              <Computer />
            </group>
          ) : (
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.15}>
              <group scale={0.025} position={[0, -1.5, -2]} castShadow>
                <Computer />
              </group>
            </Float>
          )}

          {/* Plano como estaba antes */}
          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow={!config.lowQuality}
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#1e1b4c" />
            </mesh>
          </group>

          {/* Ambiente nocturno - solo si no está optimizado */}
          {!config.skipEffects && <Environment preset="night" />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ContactExperience;
