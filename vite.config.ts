import { defineConfig } from 'vite'
import { addThemes } from './addThemes'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    addThemes(),
    react(),
  ]
})
