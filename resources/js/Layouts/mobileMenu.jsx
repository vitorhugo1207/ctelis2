import React from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Inertia } from '@inertiajs/inertia';
import { Tooltip } from 'primereact/tooltip';

export default function MobileMenu({ className }) {

    const items = [
        {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            className: 'first:bg-red-500',
            command: () => {
                Inertia.post(route('logout'));
            }
        },
        {
            label: 'Alunos',
            icon: 'pi pi-users',
            command: () => {
                Inertia.get(route('alunos'));
            }
        },
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                Inertia.get(route('dashboard'));
            }
        }
    ];

    return (
        <div className={`z-40 ${className}`}>
            <SpeedDial model={items}
                buttonClassName="p-button-help"
                className='speeddial-up right-0 bottom-0 mr-2 mb-2'
                showIcon="pi pi-bars"
                butt
                hideIcon="pi pi-times"
                transitionDelay={80}
                radius={120}
                direction="up" />
            <Tooltip target=".speeddial-up .p-speeddial-action" position="left" />
        </div>
    )
}
