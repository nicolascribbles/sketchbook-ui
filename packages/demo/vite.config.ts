import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@nicolascribbles/sketchbook-ui-library': path.resolve(__dirname, '../library/src'),
    },
  },
});