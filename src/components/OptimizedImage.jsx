import React, { useState, useRef, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes = "100vw",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  // Generate WebP source if supported
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc || originalSrc.endsWith(".svg")) return originalSrc;

    // For production, you might want to implement image optimization
    // For now, we'll use the original src
    return originalSrc;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (src) => {
    if (!src || src.endsWith(".svg")) return undefined;

    // Generate different sizes (you can customize this based on your needs)
    const sizes = [480, 768, 1024, 1200];
    return sizes.map((size) => `${src} ${size}w`).join(", ");
  };

  if (hasError) {
    return (
      <div
        className={`bg-black-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-white-50 text-sm" aria-hidden="true">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && isInView && (
        <div
          className="absolute inset-0 bg-black-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-white-50 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={getOptimizedSrc(src)}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          className={`transition-all duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
