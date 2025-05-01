import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { useDialog } from '../../context/DialogContext';

export default function DialogConfirm() {
    const { dialogConfig } = useDialog();

    return (
        <>
            <ConfirmDialog
                group='headless'
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className='flex-col items-center rounded-xl flex p-4 bg-white'>
                        <div className='rounded-full justify-center items-center h-20 w-20 -mt-8 inline-flex bg-blue-400'>
                            <i className='pi pi-question text-5xl text-white'></i>
                        </div>
                        <span className='mb-2 mt-4 block text-2xl font-bold' ref={headerRef}>
                            {message.header}
                        </span>
                        <p className='mb-0' ref={contentRef}>
                            {message.message}
                        </p>
                        <div className='items-center mt-4 flex gap-2' ref={footerRef}>
                            <Button
                                label='Confirmar'
                                icon='pi pi-check'
                                onClick={(event) => {
                                    hide(event);
                                    dialogConfig.accept();
                                }}/>
                            <Button
                                label='Cancelar'
                                icon='pi pi-times'
                                autoFocus
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                    dialogConfig.reject();
                                }}/>
                        </div>
                    </div>
                )}
            />
        </>
    );
}
