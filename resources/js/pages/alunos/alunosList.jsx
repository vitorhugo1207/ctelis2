import React, { useRef } from 'react';
import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react';
import AlunoMobile from '../../components/alunosList/alunoMobile';
import AlunoDesktop from '../../components/alunosList/alunoDesktop';
import { Toast } from 'primereact/toast';

export default function AlunosList({ alunos }) {
    const toast = useRef(null);

    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: message });
    };

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: message });
    }

    return (
        <>
            <Head title="Alunos" />
            <Toast ref={toast} />

            <div className="card">
                <div className="hidden md:block">
                    <AlunoDesktop alunos={alunos} toastSuccess={showSuccess} toastError={showError} />
                </div>
                <div className="md:hidden">
                    <AlunoMobile alunos={alunos} toastSuccess={showSuccess} toastError={showError} />
                </div>
            </div>
        </>
    );
};

AlunosList.layout = (page) => <AuthLayout children={page} />
