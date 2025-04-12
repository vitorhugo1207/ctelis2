import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';

export default function MobileMenu() {
    const toast = useRef(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className='z-40 fixed right-[4.4rem]'>
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
