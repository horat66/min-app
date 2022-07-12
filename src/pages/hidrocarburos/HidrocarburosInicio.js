import React from 'react';
import { Link, Outlet } from 'react-router-dom';


  
const HidrocarburosInicio = () => {
    return (
    <>
      <div className='content__header'>              
        <h1 className='title'>CADENA DE VALOR</h1>     
        <nav className='content__nav'>
            <ul className='content__list'>
                <li><Link to='upstream'>Upstream</Link></li>
                <li><Link to='midstream'>Midstream</Link></li>
                <li><Link to='downstream'>Downstream</Link></li>                          
            </ul>
        </nav>
      </div>  
      <Outlet />            
    </> 
  );
}

export default HidrocarburosInicio