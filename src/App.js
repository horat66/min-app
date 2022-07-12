import React from "react";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//Import Components
import Header from "./components/Header";
//import Inicio from './pages/Inicio';

import EnergiaInicio from './pages/energia/EnergiaInicio';
import EnergiaGeneracion from './pages/energia/EnergiaGeneracion.js';
import EnergiaTransmision from './pages/energia/EnergiaTransmision';
import EnergiaDistribucion from './pages/energia/EnergiaDistribucion';
import EnergiaComercializacion from './pages/energia/EnergiaComercializacion';

import MineriaInicio from './pages/mineria/MineriaInicio';
import MineriaExtraccion from './pages/mineria/MineriaExtraccion.js';
import MineriaChancadoMolienda from './pages/mineria/MineriaChancadoMolienda.js';
import MineriaProcesamiento from './pages/mineria/MineriaProcesamiento.js';
import MineriaConcentradoExportacion from './pages/mineria/MineriaConcentradoExportacion.js';



import HidrocarburosInicio from './pages/hidrocarburos/HidrocarburosInicio';
import HidrocarburosUpstream from './pages/hidrocarburos/HidrocarburosUpstream';
import HidrocarburosMidstream from './pages/hidrocarburos/HidrocarburosMidstream';
import HidrocarburosDownstream from './pages/hidrocarburos/HidrocarburosDownstream';



// Redirect Page
const RedirectPage = () => {
    useEffect(() => {
      window.location.replace('https://www.minenergia.gov.co/es/servicio-al-ciudadano/ministerio-para-ni%C3%B1os/');
    }, [])
  
    return <div style={styles.container}>
      <h3>cargando...</h3>
    </div>
  }
// Redirect Page Styles
const styles = {
    container: {
      padding: 30
    },
    link: {
      color: 'blue',
      textDecoration: 'underline'
    }
  }



function App() {
    return (
        <Routes>
            <Route path='/' element={ <Header /> }>
                {/*<Route index element={ <Inicio /> } />*/}
                <Route index element={ <EnergiaGeneracion /> } />
                <Route path='energia' element={ <EnergiaInicio />}>
                    <Route path='generacion' element={ <EnergiaGeneracion />} />
                    <Route path='transmision' element={ <EnergiaTransmision />} />
                    <Route path='distribucion' element={ <EnergiaDistribucion />} />
                    <Route path='comercializacion' element={ <EnergiaComercializacion />} />
                </Route>
                <Route path='mineria' element={ <MineriaInicio />}>
                    <Route path='extraccion' element={ <MineriaExtraccion />} />
                    <Route path='chancado-molienda' element={ <MineriaChancadoMolienda />} />
                    <Route path='procesamiento' element={ <MineriaProcesamiento />} />
                    <Route path='concentrado-exportacion' element={ <MineriaConcentradoExportacion />} />
                </Route>
                <Route path='hidrocarburos' element={ <HidrocarburosInicio />} > 
                    <Route path='upstream' element={ <HidrocarburosUpstream />} />
                    <Route path='midstream' element={ <HidrocarburosMidstream />} />
                    <Route path='downstream' element={ <HidrocarburosDownstream />} />                   
                </Route>                 
            </Route>                
        </Routes>       
    );
}

export default App;

