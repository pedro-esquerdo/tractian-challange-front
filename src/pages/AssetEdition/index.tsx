import React, { FormEvent } from 'react';
import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import {useHistory} from 'react-router-dom'

import './styles.css';
import { useState } from 'react';
import api from '../../services/api';
//import { stringify } from 'querystring';
//import AssetItem from '../../components/AssetItem';





function AssetEdit(){
    const history = useHistory();

    //const [assetsSelection, setAssetsSelection]= useState([]);

    const [name, setName] =useState('');
    const [model, setModel] =useState('');
    const [description, setDescription] =useState('');
    const [asset_image, setAssetImage] =useState('');
    const [responsable_id, setResponsibleID] =useState('');
    const [location, setLocation] =useState('');
    const [status, setStatus] =useState('');
    const [healthscore, setHealthscore] =useState('');


    const [maintenanceItems, setMaintenanceItems] = useState([
        {maintenance_responsable: '', date: '', initial_healthscore: 0, final_healthscore: 0, details: ''},
    ]);



    function handleCreateAsset(e: FormEvent){
        e.preventDefault();
        
        api.put('/api/ativos', {
            name,
            description,
            model,            
            asset_image,
            responsable_id,
            location,
            status,
            healthscore, 
            maintenanceItems
            
        }).then(()=> {
            alert('Ativo cadastrado com sucesso');
            history.push('/')
        }).catch(()=> {
            alert('Erro no cadastro');
        })

        console.log({
            name,
            model,
            description,
            asset_image,
            responsable_id,
            location,
            status,
            healthscore,
            maintenanceItems
        })
    }

    function setMaintenanceItemValue( position: number, field: string, value:string) {
        const updatedmaintenanceItems = maintenanceItems.map((maintenanceItem, index) =>{
            if (index === position) {
                return {...maintenanceItem, [field]: value}
            }
            return maintenanceItem
        })

        setMaintenanceItems(updatedmaintenanceItems);
        console.log(updatedmaintenanceItems);
    }


    function addNewMaintenanceItem() {
        setMaintenanceItems([
            ...maintenanceItems,
                {maintenance_responsable: '',
                date: '',
                initial_healthscore: 0,
                final_healthscore: 0,
                details: ''
                }

        ]);
        console.log('Adding new maintenance item')
    }
    
    
    return (
        <div id="page-assets-edit" className="container">
            <PageHeader title="Editar ativos"
            description= "Digite os dados para editar o ativo na base"
            />

            <main>
                <form onSubmit={handleCreateAsset}>
                <fieldset>
                    <legend> Dados do ativo </legend>
                    <Input
                        name="name"
                        label="ID do Ativo"                        
                        value= {name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input 
                        name="model" 
                        label="Modelo" 
                        value={model} 
                        onChange={(e) => setModel(e.target.value)}
                    />
                    <Textarea 
                        name="description" 
                        label="Descrição" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <Input 
                        type="file" 
                        name="asset_image" 
                        label="URL da imagem do ativo" 
                        value={asset_image} 
                        onChange={(e) => setAssetImage(e.target.value)}
                    />
                    <Input 
                        name="responsable_id" 
                        label="ID do Responsável" 
                        value={responsable_id} 
                        onChange={(e) => setResponsibleID(e.target.value)}
                    />
                    <Select name="location"
                            label="Unidade"
                            options= {[
                                {value: "5fb303ee43292f39e0ee56fb", label: "Unidade São Carlos"},
                                {value: "5fb3041043292f39e0ee56fc", label: "Unidade São Paulo"}
                                ]}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    <Select 
                        name="status" 
                        label="Estado de funcionamento atual"
                        options= {[
                            {value: "available", label: "Em operação"},
                            {value: "maintenance", label: "Em manutenção"},
                            {value: "Desativado", label: "Desativado"},
                            ]} 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />

                    <Input 
                        type="number" 
                        min="1" 
                        max="100" 
                        name="healthscore" 
                        label="Nota de saúde atual (1-100)" 
                        value={healthscore} 
                        onChange={(e) => setHealthscore(e.target.value)}
                    />

                </fieldset>
                <fieldset>
                    <legend>
                        Revisões Realizadas
                        <button type="button" onClick ={addNewMaintenanceItem}>
                            + Nova revisão
                        </button>
                    </legend>
                    
                        {maintenanceItems.map((maintenanceItem, index) =>{
                            return(
                                
                                <div className="maintenance-isertion-item">
                                    <p>Dados da revisão:</p>
                                <Input 
                                    name="maintenance_responsable" 
                                    label="Responsável" 
                                    className="resp" 
                                    value= {maintenanceItem.maintenance_responsable}
                                    onChange={(e) => setMaintenanceItemValue(index,"maintenance_responsable", e.target.value)} />
                                <Input 
                                    type= "date" 
                                    name="date" 
                                    label="Data"
                                    value= {maintenanceItem.date}
                                    onChange={(e) => setMaintenanceItemValue(index,"date", e.target.value)}/>
                                <div className="hsbuttons">
                                    <Input 
                                        type="number" 
                                        min="1" 
                                        max="100" 
                                        name="initial_healthscore" 
                                        label="HealthScore Inicial (1-100)" 
                                        className="hsi" 
                                        value= {maintenanceItem.initial_healthscore}
                                        onChange={(e) => setMaintenanceItemValue(index,"initial_healthscore", e.target.value)}/>
                                    <Input 
                                        type="number" 
                                        min="1" 
                                        max="100" 
                                        name="final_healthscore" 
                                        label="HealthScore Final (1-100)" 
                                        className="hsf" 
                                        value= {maintenanceItem.final_healthscore}
                                        onChange={(e) => setMaintenanceItemValue(index,"final_healthscore", e.target.value)}/>
                                </div>
                                <Textarea 
                                    name="details" 
                                    label="Detalhes" 
                                    value= {maintenanceItem.details}
                                    onChange={(e) => setMaintenanceItemValue(index,"details", e.target.value)}/>
                            </div>
                            );
                        })}
                </fieldset>

                <footer>
                    <p>
                        
                        <br/>
                        Cheque novamente os dados antes de salvar ;)
                    </p>
                    <button type="submit">
                        Salvar Ativo
                    </button>
                </footer>
                </form>      
            </main>
            
        </div>
    )
}

export default AssetEdit;