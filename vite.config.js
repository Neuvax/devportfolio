import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Optimize output
    target: "es2015",
    minify: "terser",
    sourcemap: false,
    cssCodeSplit: true,

    // Bundle optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          gsap: ["gsap"],
          ui: ["framer-motion"],
        },
      },
    },

    // Asset optimization
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },

  // Preview optimization
  preview: {
    port: 3000,
    host: true,
  },

  // Development optimization
  server: {
    port: 3000,
    host: true,
  },

  // Asset optimization
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
});
