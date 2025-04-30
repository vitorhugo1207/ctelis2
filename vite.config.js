import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        watch: {
          ignored: ['**/node_modules/**', '**/vendor/**'] // Ignora os diretórios 'node_modules' e 'vendor'
        },
        proxy: {
            '/api': 'http://127.0.0.1:8000',  // Proxy as requisições para o backend Laravel
        },
        allowedHosts: ['2a9baac7-d462-40e1-aa37-ad06cc3df27b-00-33l6xy2saf9ne.janeway.replit.dev'],
    },
});
