import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 5173,
		host: '0.0.0.0',
		watch: {
			usePolling: true
		},
		hmr: {
			host: 'localhost',
			port: 5173
		},
		proxy: {
			'/api': {
				target: 'http://nginx:80',
				changeOrigin: true,
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@widgets': path.resolve(__dirname, 'src/widgets'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@pages': path.resolve(__dirname, 'src/pages'),
		}
	}
})
