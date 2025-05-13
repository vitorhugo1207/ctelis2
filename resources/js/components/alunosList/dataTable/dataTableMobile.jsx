import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useDialog } from '../../../context/DialogContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function DataTableMobile({ alunoList, toastSuccess, toastError, setAlunoList }) {
    const { showDialog } = useDialog();
    const [alunoSelected, setAlunoSelected] = useState(null);

    const confirmDeleteAluno = (aluno) => {
        showDialog({
            message: 'Tem certeza que deseja deletar este aluno?',
            header: 'Confirmação',
            accept: async () => {
                const response = await axios.delete(`/deleteAluno/${aluno.id}`);
                if (response.status === 200) {
                    toastSuccess('Aluno deletado com sucesso!');
                    setAlunoList(response.data.alunos);
                } else {
                    toastError('Erro ao deletar aluno.');
                }
            },
            reject: () => {
                //
            },
        });
    };

    const handleAlunoSelected = (aluno) => {
        const response = axios.get(`/aluno/${aluno.id}`);
        if (response.status !== 200) {
            toastError('Erro ao buscar aluno.');
        }
    }

    useEffect(() => {
        if (alunoSelected) {
            handleAlunoSelected(alunoSelected);
            setAlunoSelected(null);
        }
    }, [alunoSelected]);

    const optionsAluno = (rowData) => {
        return (
            <div className='flex w-full justify-center gap-2'>
                <Button onClick={() => confirmDeleteAluno(rowData)} icon='pi pi-trash' className='p-button-rounded p-button-danger' text />
            </div>
        );
    };

    return (
        <DataTable value={alunoList} selection={alunoSelected} dataKey='id' selectionMode='single' onSelectionChange={(e) => setAlunoSelected(e.value)} emptyMessage='Nenhum aluno(a) encontrado.' sortMode='multiple' size='small'>
            <Column field='name' header='Nome' sortable />
            <Column field='telefone' header='Telefone' sortable />
            <Column body={optionsAluno} />
        </DataTable>
    );
}
