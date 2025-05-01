import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';

export default function AlunoDesktop({ alunos }) {
    return (
        <DataTable value={alunos} sortMode="multiple">
            <Column field="name" header="Nome" sortable filter />
        </DataTable>
    );
}
