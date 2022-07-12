import React from 'react';
import { Link, Outlet } from 'react-router-dom';


  
const EnergiaInicio = () => {
  return (
    <>
      <div className='content__header'>              
        <h1 className='title'>PROCESO ENERGÉTICO</h1>     
        <nav className='content__nav'>
          <ul className='content__list'>
            <li><Link to='generacion'>Generación</Link></li>
            <li><Link to='transmision'>Transmisión</Link></li>
            <li><Link to='distribucion'>Distribución</Link></li>
            <li><Link to='comercializacion'>Comercialización</Link></li>                  
          </ul>
        </nav>
      </div>  
      <Outlet />            
    </> 
  );
}

export default EnergiaInicio