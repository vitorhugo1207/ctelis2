import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export default function DataTableMobile({ alunoList }) {
    const optionsAluno = (rowData) => {
        return (
            <div className="flex gap-2 w-full justify-center">
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" text />
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
