import { defineConfig } from "vite";

export default defineConfig({  
  // Base path for deployed application
  base: "./",

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure compatibility with older browsers
    target: "es2015",
    minify: "terser",
  },
});
