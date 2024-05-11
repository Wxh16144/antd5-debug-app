import process from 'node:process'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.MY_SITE_BASE ?? '/',
  plugins: [
    react(),
    Pages({
      resolver: 'react',
    }),
  ],
})
