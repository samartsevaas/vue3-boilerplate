import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, "."),
  build: {
    outDir: "build"
  },
  server: {
    port: 3000
  },
  cacheDir: path.resolve(__dirname, "./cache"),
  clearScreen: true,
  envDir: path.resolve(__dirname, "./src/env"),
  envPrefix: "APP",
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
      "/@api": path.resolve(__dirname, "./src/api"),
      "/@assets": path.resolve(__dirname, "./src/assets"),
      "/@components": path.resolve(__dirname, "./src/components"),
      "/@layouts": path.resolve(__dirname, "./src/layouts"),
      "/@views": path.resolve(__dirname, "./src/views"),
      "/@router": path.resolve(__dirname, "./src/router"),
      "/@store": path.resolve(__dirname, "./src/store"),
      "/@shared": path.resolve(__dirname, "./src/shared"),
      "/@styles": path.resolve(__dirname, "./src/styles")
    }
  }
});
