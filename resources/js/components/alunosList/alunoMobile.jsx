import { useState, useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { Message } from 'primereact/message';

export default function AlunoMobile({ alunos }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [alunoList, setAlunoList] = useState([]);

    const fetchAlunos = async (search = '') => {
        try {
            const response = await axios.get('/alunoSearch', { params: { search } });
            setAlunoList(response.data.alunos);
            console.log('Alunos encontrados:', response.data.alunos);
        } catch (error) {
            console.error('Erro ao buscar alunos:', error);
            setErrorMsg('Erro ao buscar alunos. Tente novamente mais tarde.');
        }
    };

    useEffect(() => {
        setErrorMsg('');
        if (searchTerm) {
            fetchAlunos(searchTerm);
        } else {
            setAlunoList(alunos);
        }
    }, [searchTerm]);

    return (
        <>
            <TabView>
                <TabPanel header="Todos os Alunos">
                    <div className="flex flex-col gap-3">
                        <div className="card flex flex-col align-items-center">
                            <InputText
                                placeholder="Buscar (nome, telefone, endereço etc)"
                                className='w-full'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {errorMsg && <div className='pt-1'><Message severity="error" text={errorMsg} className='w-full' /></div>}
                        </div>
                        <DataTable value={alunoList} emptyMessage="Nenhum aluno(a) encontrado." sortMode="multiple">
                            <Column field="name" header="Nome" sortable />
                        </DataTable>
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
}
