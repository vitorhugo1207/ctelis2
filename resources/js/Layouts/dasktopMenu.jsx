import React from 'react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import items from './itensMenu';

export default function DesktopMenu({ className }) {
    const toolbarCenterContents = (
        <React.Fragment>
            {items.filter((item) => item.label != 'Sair').reverse().map((item, index) => (
                <Button
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    severity='secondary'
                    onClick={item.command}
                    text
                />
            ))}
        </React.Fragment>
    );

    const toolbarEndContents = (
        <React.Fragment>
            {items.filter((item) => item.label == 'Sair').map((item, index) => (
                <Button
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    severity='danger'
                    onClick={item.command}
                    text
                />
            ))}
        </React.Fragment>
    );

    return (
        <div className={`z-40 ${className}`}>
            <Toolbar
                className='fixed right-0 left-0 top-0 shadow-2'
                center={toolbarCenterContents} end={toolbarEndContents} />
            <div style={{ marginTop: '10rem' }}></div>
        </div>
    )
}
