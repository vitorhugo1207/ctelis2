import React from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Inertia } from '@inertiajs/inertia';
import { Tooltip } from 'primereact/tooltip';

export default function MobileMenu({ className }) {

    const items = [
        {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: () => {
                Inertia.post(route('logout'));
            }
        },
        {
            label: 'Alunos',
            icon: 'pi pi-users',
            command: () => {
                Inertia.get(route('alunos.index'));
            }
        }
    ];

    return (
        <div className={`z-40 fixed right-[4.8rem] top-[81vh] ${className}`}>
            <div>
                <SpeedDial model={items}
                    mask
                    buttonClassName="p-button-help"
                    className='speeddial-up'
                    showIcon="pi pi-bars"
                    hideIcon="pi pi-times"
                    transitionDelay={80}
                    radius={120}
                    direction="up" />
                <Tooltip target=".speeddial-up .p-speeddial-action" position="left" />
            </div>
        </div>
    )
}
