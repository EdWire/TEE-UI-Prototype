import { defineConfig } from 'vite'
import { addThemes } from './plugins/index'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    {
      ...addThemes(),
      enforce: 'pre'
    }
  ]
})
