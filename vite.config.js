import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // cause an error in codesandbox
  // server: {
  //  open: true,
  // },
  plugins: [react()],
})
