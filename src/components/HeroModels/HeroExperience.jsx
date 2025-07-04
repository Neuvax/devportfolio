import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import OptimizationToast from "../ui/OptimizationToast";
import {
  PERFORMANCE_CONFIG,
  detectGPUPerformance,
} from "../../lib/performanceConfig";

// Precarga los modelos para mejorar el rendimiento
useGLTF.preload("/models/optimized-room.glb");

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isDev, setIsDev] = useState(false);
  const [performanceLevel, setPerformanceLevel] = useState("medium");
  const [config, setConfig] = useState(PERFORMANCE_CONFIG.models.production);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Mostrar toast de optimización cuando inicia la detección
    setIsOptimizing(true);

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

    // Si tenemos bajo rendimiento incluso en producción, aplicar algunas optimizaciones
    if (performance === "low" && !import.meta.env.DEV) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        lowQuality: true,
        reduceLights: true,
      }));
    }

    // Simular tiempo de optimización y ocultar toast
    const optimizationTimer = setTimeout(() => {
      setIsOptimizing(false);
    }, 3000);

    return () => clearTimeout(optimizationTimer);
  }, []);

  // Si estamos en desarrollo y la configuración dice que usemos imagen estática
  // o si detectamos GPU de muy bajo rendimiento
  if (
    (isDev && config.useStaticImage) ||
    (performanceLevel === "low" && isMobile)
  ) {
    return (
      <>
        <OptimizationToast
          isOptimizing={isOptimizing}
          performanceLevel={performanceLevel}
          onClose={() => setIsOptimizing(false)}
        />
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/images/bg.png"
            alt="3D Model Preview"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-5 left-5 bg-black-50 p-2 rounded text-xs text-white-50">
            3D model deactivated to boost performance.
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <OptimizationToast
        isOptimizing={isOptimizing}
        performanceLevel={performanceLevel}
        onClose={() => setIsOptimizing(false)}
      />
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
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
      >
        <Suspense fallback={null}>
          <HeroLights optimized={config.reduceLights} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={!isMobile} // Desactivar rotación manual en móviles para mejor UX
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            // Velocidad de rotación: 0 en móviles (desactivada), normal en desktop
            rotateSpeed={isMobile ? 0 : 1}
            // Solo actualiza cuando se mueve en modo de bajo rendimiento
            enableDamping={!config.lowQuality}
          />
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room optimized={config.lowQuality} />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};

export default HeroExperience;
