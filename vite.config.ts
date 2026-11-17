import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo from /GRITTRAINING/, so production assets need that base path.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/GRITTRAINING/" : "/",
  server: { host: true, port: 5173, allowedHosts: true },
}));
