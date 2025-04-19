import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react';

export default function AlunosList ({ initialData, totalRecords }) {
    const [students, setStudents] = useState(initialData);
    const [lazyParams, setLazyParams] = useState({ first: 0, rows: 10, page: 0, search: '' });
    const [loading, setLoading] = useState(false);

    const loadStudents = () => {
        setLoading(true);
        Inertia.get(
            route('students.index'),
            { page: lazyParams.page + 1, search: lazyParams.search },
            {
                preserveState: true,
                replace: true,
                only: ['students', 'totalRecords'],
                onSuccess: (page) => {
                    setStudents(page.props.students);
                    setLoading(false);
                },
            }
        );
    };

    useEffect(() => {
        loadStudents();
    }, [lazyParams]);

    const onPage = (event) => {
        setLazyParams((prev) => ({ ...prev, first: event.first, rows: event.rows, page: event.page }));
    };

    const onSearch = (event) => {
        setLazyParams((prev) => ({ ...prev, search: event.target.value, page: 0 }));
    };

    return (
        <>
            <Head title="Alunos" />

            <div className="datatable-lazy">
            <div className="p-inputgroup mb-3">
                <InputText
                    placeholder="Search students..."
                    value={lazyParams.search}
                    onChange={onSearch}
                />
            </div>
            <DataTable
                value={students}
                lazy
                paginator
                rows={lazyParams.rows}
                totalRecords={totalRecords}
                first={lazyParams.first}
                onPage={onPage}
                loading={loading}
            >
                <Column field="id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="email" header="Email" />
                <Column field="created_at" header="Created At" />
            </DataTable>
            {loading && <ProgressSpinner />}
        </div>
        </>


    );
};

Index.layout = (page) => <AuthLayout children={page} />
