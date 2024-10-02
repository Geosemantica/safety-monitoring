import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./environments",
  build: { outDir: "./build", emptyOutDir: true },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
