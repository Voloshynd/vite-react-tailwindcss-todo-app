import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/vite-react-app-tailwindcss-todo-app/",
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main/jsx",
    },
  },
});
