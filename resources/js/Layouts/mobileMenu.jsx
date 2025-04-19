import React from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Inertia } from '@inertiajs/inertia';

export default function MobileMenu({ className }) {

    const items = [
        {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: () => {
                Inertia.post(route('logout'));
            }
        },
    ];

    return (
        <div className={`z-40 fixed right-[4.8rem] top-[85vh] ${className}`}>
            <SpeedDial model={items}
                mask
                showIcon="pi pi-bars"
                hideIcon="pi pi-times"
                transitionDelay={80}
                radius={120}
                direction="up" />
        </div>
    )
}
