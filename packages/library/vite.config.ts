import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
	resolve: {alias: {'@': path.resolve(__dirname, 'src')}},
  build: {
    lib: {
      
      entry: resolve(__dirname, "src/lib.ts"),
      name: "SketchbookUI",
      fileName: "sketchbook-ui-library",
    },
		outDir: 'dist',
    rollupOptions: {
      external: ["vue"],
      output: {
				exports: 'named',
        globals: {
          vue: "Vue",
        },
      },
    },
    
  }
})
