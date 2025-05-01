import React from 'react';
import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react';
import AlunoMobile from '../../components/alunosList/alunoMobile';
import AlunoDesktop from '../../components/alunosList/alunoDesktop';


export default function AlunosList({ alunos }) {

    return (
        <>
            <Head title="Alunos" />

            <div className="card">
                <div className="hidden md:block">
                    <AlunoDesktop alunos={alunos} />
                </div>
                <div className="md:hidden">
                    <AlunoMobile alunos={alunos} />
                </div>
            </div>
        </>
    );
};

AlunosList.layout = (page) => <AuthLayout children={page} />
