// Configuración de optimización de rendimiento
export const PERFORMANCE_CONFIG = {
  // Modo de rendimiento para modelos 3D
  models: {
    // Habilitar optimizaciones automáticas basadas en rendimiento
    autoOptimize: true,
    
    // Nivel de detalle en desarrollo vs producción
    development: {
      lowQuality: true,        // Usar materiales de baja calidad
      reduceLights: true,      // Reducir número de luces
      skipEffects: true,       // Saltar efectos de post-procesamiento
      useStaticImage: false,   // Usar imagen estática en lugar del modelo (configurar a true para máximo rendimiento)
      dpr: 0.8,                // Resolución (0.5-1.0)
      frameOnDemand: true      // Solo renderizar cuando es necesario
    },
    
    // Configuración para producción
    production: {
      lowQuality: false,
      reduceLights: false,
      skipEffects: false,
      dpr: 1.2,                // Mayor resolución en producción
      frameOnDemand: false
    }
  }
};

// Detectar si el dispositivo puede manejar gráficos de alta calidad
export const detectGPUPerformance = () => {
  try {
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) return 'low';
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return 'medium';
    
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    
    // Detectar GPUs de bajo rendimiento
    if (/(Intel|Microsoft|SwiftShader|Basic)/i.test(renderer)) {
      return 'low';
    }
    
    // Detectar GPUs de alto rendimiento
    if (/(NVIDIA|AMD|Radeon)/i.test(renderer)) {
      return 'high';
    }
    
    return 'medium';
  } catch (e) {
    console.warn('No se pudo detectar el rendimiento de la GPU:', e);
    return 'medium';
  }
};
