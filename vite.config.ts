import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      eslintrc: {
        enabled: true
      },
      dts: path.resolve(__dirname, "./src/declarations/auto-imports.d.ts")
    }),
    Components({
      dirs: ["src/components", "src/layouts"],
      dts: path.resolve(__dirname, "./src/declarations/components.d.ts")
    })
  ],
  root: path.resolve(__dirname, "."),
  build: {
    outDir: "build"
  },
  server: {
    port: 3000
  },
  cacheDir: path.resolve(__dirname, "./cache"),
  clearScreen: true,
  envPrefix: "APP",
  resolve: {
    extensions: [".ts", ".tsx", ".vue", ".scss", ".sass", ".less", ".css"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@img": path.resolve(__dirname, "./src/assets/img")
    }
  }
});
