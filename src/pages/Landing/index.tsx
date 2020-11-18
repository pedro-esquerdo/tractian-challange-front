import React from 'react';
import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/Machine.svg';
//import logoImg from '../../assets/images/TractianLogo.png';
import logoImg from '../../assets/images/tractian-logo-long.svg';
//import landingIgm from '../../assets/images/landing.png';

import './styles.css';

function Landing() {
    return(
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Desafio Tractian: Pedro Esquerdo</h2>
            </div>

            <img src={landingImg}
                 alt="Desafio front-end"
                 className="hero-image"
            />
            <div className="buttons-container">
                <Link to="/consultar" className="consultar">
                    Consultar                
                </Link>

                <Link to="/inserir" className="inserir">
                    Inserir Ativo                
                </Link>

                <Link to="/editar" className="editar">
                    Editar Ativo                
                </Link>

                <Link to="/deletar" className="deletar">
                    Deletar Ativo                
                </Link>

                

            </div>
        </div>
    </div> 
    )
}

export default Landing;