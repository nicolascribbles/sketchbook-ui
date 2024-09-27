import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
		assetsDir: 'assets',
    rollupOptions: {
      input: [
        path.resolve(__dirname, 'src/main.ts'),
        path.resolve(__dirname, 'index.html') 
      ],
			output: {
				manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        },
			}
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue', '.json'] 
  },
})
