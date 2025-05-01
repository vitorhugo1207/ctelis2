import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useDialog } from '../../../context/DialogContext';

export default function DataTableMobile({ alunoList }) {
    const { showDialog } = useDialog();

    const confirmDeleteAluno = () => {
        showDialog({
            message: 'Tem certeza que deseja deletar este aluno?',
            header: 'Confirmação',
            accept: () => {
                console.log('Aluno deletado');
                // TODO: lógica para deletar o aluno
            },
            reject: () => {
                console.log('Ação cancelada');
            },
        });
    };

    const optionsAluno = (rowData) => {
        return (
            <div className="flex gap-2 w-full justify-center">
                <Button onClick={confirmDeleteAluno} icon="pi pi-trash" className="p-button-rounded p-button-danger" text />
            </div>
        );
    }

    return (
        <DataTable value={alunoList} emptyMessage="Nenhum aluno(a) encontrado." sortMode="multiple" size='small'>
            <Column field="name" header="Nome" sortable />
            <Column field="telefone" header="Telefone" sortable />
            <Column body={optionsAluno} />
        </DataTable>
    )
}
