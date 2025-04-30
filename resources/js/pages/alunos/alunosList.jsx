import React from 'react';
import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export default function AlunosList({ alunos }) {

    return (
        <>
            <Head title="Alunos" />

            <div className="card">
                <DataTable value={alunos} sortMode="multiple">
                    <Column field="name" header="Nome" sortable filter />
                </DataTable>
            </div>
        </>
    );
};

AlunosList.layout = (page) => <AuthLayout children={page} />
