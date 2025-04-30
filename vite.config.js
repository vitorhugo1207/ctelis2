
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
        hmr: {
            host: process.env.REPL_SLUG + '.id.repl.co',
            protocol: 'wss',
            clientPort: 443,
        },
        https: true,
        cors: true,
        watch: {
            ignored: ['**/node_modules/**', '**/vendor/**']
        },
    },
});
