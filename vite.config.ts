import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root path for deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
