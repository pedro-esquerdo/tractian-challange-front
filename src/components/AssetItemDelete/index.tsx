import { AxiosRequestConfig } from 'axios';
import React, { FormEvent } from 'react';
import healthscoreImg from '../../assets/images/healthscore.svg';
import api from '../../services/api';

import './styles.css';

export interface Asset {
        description: string;
        healthscore: number;
        location: string;
        model: string;
        name: string;
        responsable_id: string;
        status: string;
        __v: 0
        _id: string
}

interface AssetItemDeleteProps {
    asset: Asset
}


const AssetItemDelete: React.FC<AssetItemDeleteProps> = ({asset}) => {
    

    function handleDeleteAsset(e: FormEvent){

        console.log("DELETE REQUEST SENT")
        e.preventDefault();
        const config: AxiosRequestConfig = {params: {ativo_id : asset._id}}

        api.delete('api/ativos/delete' , config ).then(()=> {
            alert('Ativo deletado com sucesso');
            window.location.reload(false);
        }).catch(()=> {
            alert('Erro no deletado');
        })
    }


    return(<article className="asset-item">
                <header>
                    <img src="https://www.empresadeusinagem.com.br/fresadoras/imagens/prensa-hidraulica-industrial.jpg" 
                    alt="Prensa Hidráulica SDX 302S"/>
                    <div>
                        <strong> {asset.model} </strong>
                        <span> {asset.name} </span>
                    </div>
                </header>
                    <p>
                        {asset.description}
                    <br ></br>
                    </p>
                    <footer>
                        <p>
                        <img className= "healthscoreimg" src={healthscoreImg} alt="healthscore"/>
                            Healthscore:
                            <strong>{asset.healthscore}% </strong>
                        </p>
                        <form onSubmit={handleDeleteAsset}>
                            <button type="submit">
                                Deletar!
                                <br ></br>
                            </button>
                        </form>
                    </footer>
            </article>)
}

export default AssetItemDelete;
