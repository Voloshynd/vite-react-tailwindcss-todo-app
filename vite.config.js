import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/vite-react-tailwindcss-todo-app/",
  build: {
    manifest: true,
    rollupOptions: {
      input: "/src/main.jsx",
    },
  },
});
