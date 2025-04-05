import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { PrimeReactProvider } from 'primereact/api';

const appName = import.meta.env.VITE_APP_NAME || 'Labkrafs';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PrimeReactProvider>
                <App {...props} />
            </PrimeReactProvider>
        );
    },
    progress: {
        color: '#64748b',
    },
});
