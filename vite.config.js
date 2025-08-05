import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  base: './', // ✅ THIS is the fix
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
