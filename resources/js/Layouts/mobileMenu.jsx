import React from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import itensMenu from './itensMenu';

export default function MobileMenu({ className }) {
    return (
        <div className={`z-40 ${className}`}>
            <SpeedDial model={itensMenu}
                buttonClassName="p-button-help btnPrimary"
                className='speeddial-up right-0 bottom-0 mr-2 mb-2 fixed'
                showIcon="pi pi-bars"
                hideIcon="pi pi-times"
                transitionDelay={80}
                radius={120}
                direction="up" />
            <Tooltip target=".speeddial-up .p-speeddial-action" position="left" />
        </div>
    )
}
