import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AssetEdit from './pages/AssetEdition';
import AssetForm from './pages/AssetForm';
import AssetDelete from './pages/AssetsDelete';
import AssetList from './pages/AssetsList';
import Landing from './pages/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component ={Landing}/>
            <Route path="/consultar" component ={AssetList}/>
            <Route path="/inserir" component ={AssetForm}/>
            <Route path="/editar" component ={AssetEdit}/>
            <Route path="/deletar" component ={AssetDelete}/>
        </BrowserRouter>
    );
}

export default Routes;