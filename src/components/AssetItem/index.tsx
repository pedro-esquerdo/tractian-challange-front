import React from 'react';
import healthscoreImg from '../../assets/images/healthscore.svg';
import whatsappImg from '../../assets/images/whatsapp.svg';

import './styles.css'

export interface Asset {
        description: string;
        healthscore: number;
        location: string;
        model: string;
        name: string;
        responsable_id: string;
        status: string;
        __v: 0
        _id: "5fac206773402c3188565411"
}

interface AssetItemProps {
    asset: Asset
}

const AssetItem: React.FC<AssetItemProps> = ({asset}) => {
    return(<article className="asset-item">
                <header>
                    <img src="https://www.empresadeusinagem.com.br/fresadoras/imagens/prensa-hidraulica-industrial.jpg" 
                    alt="Prensa Hidráulica SDX 302S"/>
                    <div>
                        <strong> {asset.model} - {asset.location}</strong>
                        <span> {asset.name} ({asset._id})</span>
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
                        <button type="button">
                            <img src= {whatsappImg} alt ="whatsapp"/>
                            Responsável:
                            <br ></br>
                            {asset.responsable_id}
                        </button>
                    </footer>
            </article>)
}

export default AssetItem;