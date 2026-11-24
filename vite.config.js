import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/module-4-fruit-tier-list/',
  plugins: [react()],
})
