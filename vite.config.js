import { defineConfig } from "vite";

export default defineConfig({
  // Server configuration for Replit
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "0.0.0.0",
      "286ff13f-374a-4e44-9578-a7f1118e764b-00-3pratl6k5lx3o.pike.replit.dev",
      ".replit.dev",
      ".pike.replit.dev",
    ],
    // Enable CORS for development
    cors: true,
    // Handle client-side routing
    historyApiFallback: true,
    // Additional headers for Replit
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  },

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure compatibility with older browsers
    target: "es2015",
    minify: "terser",
  },

  // Base path for deployment
  base: "./",

  // Asset handling
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.eot"],

  // Development optimizations
  optimizeDeps: {
    include: [],
  },
});
