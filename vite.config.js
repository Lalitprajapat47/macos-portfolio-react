import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Provide a minimal process.env shim for libraries that expect `process` in the browser
  define: {
    'process.env': {}
  }
})
