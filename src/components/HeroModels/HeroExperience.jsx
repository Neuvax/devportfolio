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
  const [showRotationHint, setShowRotationHint] = useState(false);
  const [isHintAnimating, setIsHintAnimating] = useState(false);

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

    // Mostrar hint de rotación solo en desktop después de 5 segundos
    if (!isMobile) {
      const hintTimer = setTimeout(() => {
        setShowRotationHint(true);
        setIsHintAnimating(true);
      }, 5000);

      // Iniciar animación de salida 4.5 segundos después de aparecer
      const animateOutTimer = setTimeout(() => {
        setIsHintAnimating(false);
      }, 9500);

      // Ocultar hint completamente 0.5 segundos después de la animación de salida
      const hideHintTimer = setTimeout(() => {
        setShowRotationHint(false);
      }, 10000);

      return () => {
        clearTimeout(optimizationTimer);
        clearTimeout(hintTimer);
        clearTimeout(animateOutTimer);
        clearTimeout(hideHintTimer);
      };
    }

    return () => clearTimeout(optimizationTimer);
  }, [isMobile]);

  // Si estamos en desarrollo y la configuración dice que usemos imagen estática
  // o si detectamos GPU de muy bajo rendimiento
  if (
    (isDev && config.useStaticImage) ||
    (performanceLevel === "low" && isMobile)
  ) {
    return (
      <div className="relative w-full h-full">
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
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <OptimizationToast
        isOptimizing={isOptimizing}
        performanceLevel={performanceLevel}
        onClose={() => setIsOptimizing(false)}
      />

      {/* Rotation Hint - Integrado directamente */}
      {showRotationHint && !isMobile && (
        <div
          className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ease-in-out ${
            isHintAnimating
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div className="bg-black/30 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 flex items-center space-x-2 text-white/70 text-sm shadow-lg">
            <svg
              className="w-4 h-4 animate-spin text-blue-400/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Drag to rotate</span>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default HeroExperience;
