import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "https://github.com/Voloshynd/vite-react-app-tailwindcss-todo-app.git",
  plugins: [react()],
build: {
  manifest: true,
  rollupOptions: {
    input: "./src/main/jsx",
  },
},

})

