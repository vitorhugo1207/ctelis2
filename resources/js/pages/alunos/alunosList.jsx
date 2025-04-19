import React from 'react';
import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react';

export default function AlunosList () {

    return (
        <>
            <Head title="Alunos" />
        </>
    );
};

AlunosList.layout = (page) => <AuthLayout children={page} />
