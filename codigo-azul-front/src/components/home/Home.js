import React from 'react'
import {Link} from 'react-router-dom'
import './home.css';
import { CodigoAzul } from '../BotonLlamada/BotonLlamada';

export const Home = ({ user }) => {
  return (
    <>

      <div className="main">
        <div></div>
        <Link to={`/usuarios/`} className='hom usu'></Link>
        <Link to={`/llamadas/`} className='hom butbot ale'></Link>
        <Link to={`/pacientes/`} className='hom pac'></Link>
        <Link to={`/areas/`} className='hom butbot are'></Link>
        <CodigoAzul user={user} />
        <div></div>
      </div>
    </>
  )
}

export default Home