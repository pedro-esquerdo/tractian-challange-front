import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/BackIcon.svg';
import logoImg from '../../assets/images/tractian-logo-long.svg';
import './styles.css';

interface PageHeaderProps {
    title: string
    description?: string
}

const PageHeader: React.FunctionComponent <PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to ="/">
                        <img className= "go-back-button" src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Tractian"/>
                </div>

                <div className="header-content">
                    <strong>
                        {props.title}
                    </strong>
                    {props.description ? <p>{props.description}</p>: null}
                    {props.children}
                </div>
            </header>
    );
}

export default PageHeader;