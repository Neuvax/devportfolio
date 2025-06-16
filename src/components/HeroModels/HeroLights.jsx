import React from "react";
import * as THREE from "three";

const HeroLights = ({ optimized = false }) => {
  // Reducir intensidad de luces en modo optimizado
  const intensityFactor = optimized ? 0.6 : 1;
  
  return (
    <>
      {/* Reducimos el número de luces y sus intensidades en modo optimizado */}
      <spotLight
        position={[2, 5, 6]}
        intensity={100 * intensityFactor}
        angle={0.15}
        penumbra={0.2}
        color="white"
        // Desactiva sombras en modo optimizado
        castShadow={!optimized}
        // Reduce la calidad de las sombras en modo optimizado
        shadow-mapSize={optimized ? [512, 512] : [1024, 1024]}
      />
      
      {/* Solo mostramos estas luces si no estamos en modo optimizado */}
      {!optimized && (
        <>
          <spotLight
            position={[4, 5, 4]}
            intensity={40}
            angle={0.3}
            penumbra={0.5}
            color="#4cc9f0"
          />
          <spotLight
            position={[-3, 5, 5]}
            intensity={60}
            angle={0.3}
            penumbra={1}
            color="#cc00cc"
          />
          <primitive
            object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
          />
        </>
      )}
      
      {/* Mantenemos algunas luces básicas incluso en modo optimizado */}
      <pointLight position={[0, 1, 0]} intensity={10 * intensityFactor} color={"#7209b7"} />      <ambientLight intensity={optimized ? 0.4 : 0.2} color="#ffffff" />
    </>
  );
};

export default HeroLights;
