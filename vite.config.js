import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    outDir: 'dist', // Ensures the build output is in the 'dist' directory
  },
  base: '/port1/', // Adjust this to match your GitHub Pages repository name
});
