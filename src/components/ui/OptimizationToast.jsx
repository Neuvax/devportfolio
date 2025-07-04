import React, { useState, useEffect, useCallback } from "react";

const OptimizationToast = ({ isOptimizing, performanceLevel, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleExit = useCallback(() => {
    setIsExiting(true);
    // Wait for exit animation to complete
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      if (onClose) onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (isOptimizing) {
      setIsVisible(true);
      setIsExiting(false);

      // Auto-hide after 3 seconds
      const hideTimer = setTimeout(() => {
        handleExit();
      }, 3000);

      return () => {
        clearTimeout(hideTimer);
      };
    } else if (isVisible) {
      handleExit();
    }
  }, [isOptimizing, onClose, isVisible, handleExit]);

  if (!isOptimizing && !isVisible) {
    return null;
  }

  const getOptimizationMessage = () => {
    switch (performanceLevel) {
      case "low":
        return "Optimizing 3D models for your device...";
      case "medium":
        return "Adjusting graphics quality for optimal performance...";
      case "high":
        return "Loading high-quality 3D experience...";
      default:
        return "Optimizing 3D models based on GPU capabilities...";
    }
  };

  const getIcon = () => {
    switch (performanceLevel) {
      case "low":
        return "⚡";
      case "medium":
        return "🔧";
      case "high":
        return "🚀";
      default:
        return "⚙️";
    }
  };

  return (
    <div
      className={`fixed top-32 right-4 ${
        isVisible && !isExiting
          ? "animate-toast-enter"
          : isExiting
          ? "animate-toast-exit"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        zIndex: 9999,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div
        className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 shadow-2xl max-w-sm"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="flex items-center space-x-3">
          {/* Animated icon */}
          <div
            className={`text-xl ${
              isVisible && !isExiting
                ? "animate-icon-bounce"
                : "animate-spin-slow"
            }`}
          >
            {getIcon()}
          </div>

          {/* Message */}
          <div className="flex-1">
            <p className="text-white text-sm font-medium">
              {getOptimizationMessage()}
            </p>
          </div>

          {/* Loading dots */}
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleExit();
            }}
            className="ml-2 text-white/60 hover:text-white transition-colors duration-200 text-xl leading-none cursor-pointer"
            aria-label="Close optimization notification"
            type="button"
          >
            ×
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-2 w-full bg-white/10 rounded-full h-1">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-1 rounded-full animate-pulse-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationToast;
