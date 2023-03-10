import { defineConfig } from 'vite'
import { addShared } from './plugins/addShared'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    addShared(),
    react(),
  ]
})
