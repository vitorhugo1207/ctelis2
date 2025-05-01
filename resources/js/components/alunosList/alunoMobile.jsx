import { useState, useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { Message } from 'primereact/message';
import DataTableMobile from './dataTable/dataTableMobile';
import DialogConfirm from '../dialogs/dialogConfirm';

export default function AlunoMobile({ alunos, toastSuccess, toastError }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [alunoList, setAlunoList] = useState([]);
    const [arteMacial, setArteMarcial] = useState([]);

    const fetchAlunos = async (search = '') => {
        try {
            const response = await axios.get('/alunoSearch', { params: { search } });
            setAlunoList(response.data.alunos);
        } catch (error) {
            console.error('Erro ao buscar alunos: ', error);
            setErrorMsg('Erro ao buscar alunos. Tente novamente mais tarde.');
        }
    };

    const fetchArteMarcial = async () => {
        try {
            const response = await axios.get('/allArtesMarciais');
            setArteMarcial(response.data);
        } catch (error) {
            console.error('Erro ao buscar artes marciais: ', error);
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

    useEffect(() => {
        fetchArteMarcial();
    }, [])

    const renderTabContent = () => (
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
            <DataTableMobile alunoList={alunoList} toastSuccess={toastSuccess} toastError={toastError} setAlunoList={setAlunoList} />
        </div>
    );

    return (
        <>
            <DialogConfirm />
            <TabView>
                <TabPanel header="Todos os Alunos">
                    {renderTabContent()}
                </TabPanel>
                {arteMacial.map((arte, index) => (
                    <TabPanel key={index} header={"Alunos ".concat(arte.name)}>
                        {renderTabContent()}
                    </TabPanel>
                ))}
            </TabView>
        </>
    );
}
