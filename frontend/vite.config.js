import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 3000,
    host: true,
		watch: {
			usePolling: true
		},

    proxy : {
      '/api' : {
        target : 'http://backend:5000',
        changeOrigin : true
      }
    }
  },preview: {
		port: 3000
	}
})
