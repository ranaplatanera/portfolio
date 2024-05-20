import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactToastify from 'react-toastify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions:{
  //     external:[reactToastify]
  //   }
  // }
})
