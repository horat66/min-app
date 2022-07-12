import React from 'react';
import { Link, Outlet } from 'react-router-dom';


  
const MineriaInicio = () => {
    return (
    <>
      <div className='content__header'>              
        <h1 className='title'>PROCESO MINERO</h1>     
        <nav className='content__nav'>
            <ul className='content__list'>
                <li><Link to='extraccion'>Extracción</Link></li>
                <li><Link to='chancado-molienda'>Chancado y Molienda</Link></li>
                <li><Link to='procesamiento'>Procesamiento</Link></li>   
                <li><Link to='concentrado-exportacion'>Concentrado y Exportación</Link></li>                
            </ul>
        </nav>
      </div>  
      <Outlet />            
    </> 
  );
}

export default MineriaInicio