import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite'
import tailwindcss from "tailwindcss";
// import svgr from 'vite-plugin-svgr';
// import path from "path";

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
