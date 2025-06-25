import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'ignatus-anim.github.io',  // Updated to match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
