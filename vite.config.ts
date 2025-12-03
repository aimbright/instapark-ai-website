import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use '/' for local dev, '/instapark-ai-website/' for production/GitHub Pages
  base: command === 'build' ? '/instapark-ai-website/' : '/',
}))
