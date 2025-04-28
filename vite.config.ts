import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname, './src/components'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@interfaces": path.resolve(__dirname, './src/interfaces'),
      "@layouts": path.resolve(__dirname, './src/layouts'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@routes": path.resolve(__dirname, './src/routes'),
      "@services": path.resolve(__dirname, './src/services'),
      "@store": path.resolve(__dirname, './src/store'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@utils": path.resolve(__dirname, './src/utils'),
      "@validations": path.resolve(__dirname, './src/validations'),
      "@customTypes": path.resolve(__dirname, './src/types')
    }
  },
  plugins: [react()],
})
