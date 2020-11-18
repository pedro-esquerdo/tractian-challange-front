import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import AssetItem, { Asset } from '../../components/AssetItem';
import './styles.css';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';



function AssetList(){
    const[assets, setAssets]= useState([]);

    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');
    const [name, setName] = useState(' ');
    const [healthscore, setHealthscore] = useState('');

    async function searchAssets (e: FormEvent){
        e.preventDefault();

        const response = await api.post('api/ativos/local/location',{
            params: {
                location,
                status,
                name,
                healthscore
            }
        });

        setAssets(response.data)
    }

    return (
        <div id="page-assets-list" className="container">
            <PageHeader title="Consultar Ativos">
                <form id="search-assets" onSubmit={searchAssets}>
                    <Select name="location"
                                label="Unidade"
                                value ={location}
                                onChange = {e=> {setLocation(e.target.value)}}
                                options = {[
                                    {value: "5fb303ee43292f39e0ee56fb", label: "São Carlos"},
                                    {value: "5fb3041043292f39e0ee56fc", label: "São Paulo"},
                                    {value: "", label: "Todas"}
                                ]}
                    />
                    <Select name="status"
                                label="Status"
                                value ={status}
                                onChange = {e=> {setStatus(e.target.value)}}
                                options = {[
                                    {value: "available", label: "Disponível"},
                                    {value: "maintenance", label: "Em manutenção"},
                                    {value: "disabled", label: "Desativado"}
                                ]}
                    />
                    <Input name="name"
                            label="Nome"
                            value ={name}
                            onChange = {e=> {setName(e.target.value)}}/>
                    <Input type="number"
                           min="1" 
                           max="100"
                           value ={healthscore}
                           onChange = {e=> {setHealthscore(e.target.value)}} 
                           name="healthscore" 
                           label="Saude máxima"/>

                    <button type="submit" >
                        Buscar
                    </button>

                </form> 
            </PageHeader>
            <main>
                {assets.map((asset : Asset) => {
                    return <AssetItem key={asset._id} asset={asset}/>
                })}
            </main>

        </div>
    )
}

export default AssetList;