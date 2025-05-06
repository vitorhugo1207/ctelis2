import { useState, useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { Message } from 'primereact/message';
import DataTableMobile from './dataTable/dataTableMobile';
import DialogConfirm from '../dialogs/dialogConfirm';
import { Button } from 'primereact/button';

export default function AlunoMobile({ alunos, toastSuccess, toastError }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [alunoList, setAlunoList] = useState([]);
    const [arteMacial, setArteMarcial] = useState([]);
    const [arte, setArte] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const fetchAlunos = async (search = '', arte) => {
        try {
            const response = await axios.get('/alunoSearch', { params: { search, arte } });
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
        if (searchTerm || arte) {
            fetchAlunos(searchTerm, arte);
        } else {
            setAlunoList(alunos);
        }
    }, [searchTerm, arte]);

    useEffect(() => {
        fetchArteMarcial();
    }, []);

    const renderTabContent = () => (
        <div className="flex flex-col gap-3">
            <div className="card flex flex-col align-items-center">
                <div className='flex flex-row gap-2 w-full'>
                    <InputText
                        placeholder="Buscar"
                        className='w-full'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                        label="Novo"
                        severity='contrast'
                        icon="pi pi-plus"
                        className="p-button-outlined w-36"
                    />
                </div>
                {errorMsg && <div className='pt-1'><Message severity="error" text={errorMsg} className='w-full' /></div>}
            </div>
            <DataTableMobile alunoList={alunoList} toastSuccess={toastSuccess} toastError={toastError} setAlunoList={setAlunoList} />
        </div>
    );

    return (
        <>
            <DialogConfirm />
            <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => {
                    setActiveIndex(e.index);
                    if (e.index === 0) {
                        setArte(0);
                    } else {
                        setArte(arteMacial[e.index - 1]?.id || 0);
                    }
                }}
            >
                <TabPanel header="Todos os Alunos">
                    {renderTabContent()}
                </TabPanel>
                {arteMacial.map((arte) => (
                    <TabPanel key={arte.id} header={arte.name}>
                        {renderTabContent()}
                    </TabPanel>
                ))}
            </TabView>
        </>
    );
}
