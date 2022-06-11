import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
    define: {
    'process.env': process.env
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

