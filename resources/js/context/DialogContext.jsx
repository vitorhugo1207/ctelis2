import React, { createContext, useContext, useState } from 'react';
import { confirmDialog } from 'primereact/confirmdialog';

const DialogContext = createContext();

export function DialogProvider({ children }) {
    const [dialogConfig, setDialogConfig] = useState({
        accept: null,
        reject: null,
    });

    const showDialog = ({ message, header, accept, reject }) => {
        setDialogConfig({
            accept: accept || (() => {}),
            reject: reject || (() => {}),
        });
        confirmDialog({
            group: 'headless',
            message: message,
            header: header,
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject'
        });
    };

    return (
        <DialogContext.Provider value={{ dialogConfig, showDialog }}>
            {children}
        </DialogContext.Provider>
    );
}

export function useDialog() {
    return useContext(DialogContext);
}
