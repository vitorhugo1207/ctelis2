
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
        host: '0.0.0.0',
        port: 5173,
        cors: {
            origin: '*', // Allow all origins
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
            allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        },
        hmr: {
            host: process.env.REPL_SLUG ? `${process.env.REPL_SLUG}.id.repl.co` : '127.0.0.1',
            protocol: process.env.REPL_SLUG ? 'wss' : 'ws',
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
