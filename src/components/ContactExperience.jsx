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
const AnimatedLights = ({ optimized = false, isMobile = false }) => {
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

  // Intensidades ajustadas para móviles
  const ambientIntensity = optimized ? 0.5 : isMobile ? 0.4 : 0.3;
  const directionalIntensity1 = optimized ? 1.5 : isMobile ? 1.8 : 2;
  const directionalIntensity2 = optimized ? 1.2 : isMobile ? 1.5 : 1.8;

  return (
    <>
      <ambientLight intensity={ambientIntensity} color="#e6f3ff" />
      <directionalLight
        position={isMobile ? [3, 4, 2] : [5, 5, 3]} // Posición más cercana en móviles
        intensity={directionalIntensity1}
        color="#8b5cf6"
      />
      <directionalLight
        position={isMobile ? [3, 6, 1] : [5, 9, 1]} // Posición más cercana en móviles
        intensity={directionalIntensity2}
        color="#3b82f6"
        castShadow={!optimized}
      />
      {!optimized && (
        <>
          <pointLight
            ref={pointLight1}
            position={isMobile ? [-3, 1, -3] : [-5, 2, -5]} // Más cerca en móviles
            intensity={isMobile ? 0.6 : 0.8}
            color="#a855f7"
          />
          <pointLight
            ref={pointLight2}
            position={isMobile ? [3, -1, 3] : [5, -2, 5]} // Más cerca en móviles
            intensity={isMobile ? 0.4 : 0.6}
            color="#3b82f6"
          />
          <spotLight
            ref={spotLight}
            position={isMobile ? [0, 6, 0] : [0, 10, 0]} // Más bajo en móviles
            angle={0.3}
            penumbra={1}
            intensity={isMobile ? 0.8 : 1}
            color="#6366f1"
            castShadow
          />

          {/* Luces adicionales para más vida - Reducidas en móviles */}
          {!isMobile && (
            <>
              <pointLight
                position={[0, 5, 8]}
                intensity={0.3}
                color="#ec4899"
              />
              <pointLight
                position={[-8, 3, 0]}
                intensity={0.4}
                color="#06b6d4"
              />
            </>
          )}
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
      <div className="w-full h-full min-h-[700px] md:min-h-[700px] sm:min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
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
    <div className="w-full h-full min-h-[700px] md:min-h-[700px] sm:min-h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas
        shadows={!config.lowQuality}
        camera={{
          position: isMobile ? [0, 2, 5] : [0, 3, 7], // Cámara más cerca en móviles
          fov: isMobile ? 50 : 45, // Campo de visión más amplio en móviles
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
          {/* Estrellas de fondo para ambiente misterioso - Ajustadas para móviles */}
          {!config.skipEffects && (
            <Stars
              radius={isMobile ? 50 : 100} // Radio más pequeño en móviles
              depth={isMobile ? 25 : 50} // Profundidad más pequeña en móviles
              count={config.lowQuality ? 200 : isMobile ? 400 : 800} // Menos estrellas en móviles
              factor={4}
              saturation={0}
              fade
              speed={0.3}
            />
          )}

          {/* Luces animadas */}
          <AnimatedLights optimized={config.reduceLights} isMobile={isMobile} />

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
            minDistance={isMobile ? 2 : 3} // Distancia mínima más cercana en móviles
            maxDistance={isMobile ? 6 : 10} // Distancia máxima más cercana en móviles
            minPolarAngle={Math.PI / 6} // Ángulo más permisivo en móviles
            maxPolarAngle={Math.PI / 2}
            // Velocidad de rotación: 0 en móviles, normal en desktop
            rotateSpeed={isMobile ? 0 : 1}
            // Solo actualiza cuando se mueve en modo de bajo rendimiento
            enableDamping={!config.lowQuality}
          />

          {/* Computadora con animación flotante condicional - Responsive */}
          {config.lowQuality ? (
            <group
              scale={isMobile ? 0.02 : 0.025} // Escala más pequeña en móviles
              position={isMobile ? [0, -1, -1] : [0, -1.5, -2]} // Posición ajustada para móviles
              castShadow={!config.lowQuality}
            >
              <Computer />
            </group>
          ) : (
            <Float
              speed={isMobile ? 0.8 : 1.2}
              rotationIntensity={isMobile ? 0.05 : 0.1}
              floatIntensity={isMobile ? 0.1 : 0.15}
            >
              <group
                scale={isMobile ? 0.02 : 0.025} // Escala más pequeña en móviles
                position={isMobile ? [0, -1, -1] : [0, -1.5, -2]} // Posición ajustada para móviles
                castShadow
              >
                <Computer />
              </group>
            </Float>
          )}

          {/* Plano del suelo - Responsive */}
          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow={!config.lowQuality}
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={isMobile ? [20, 20] : [30, 30]} />
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
