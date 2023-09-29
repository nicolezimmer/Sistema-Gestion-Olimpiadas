import React from 'react'
import {Link} from 'react-router-dom'
import './home.css';
export const Home = () => {
  return (

      <div className="main">
        <div></div>
        <Link to={`/usuarios/`} className='hom usu'></Link>
        <div className='hom butbot ale'></div>
        <Link to={`/pacientes/`} className='hom pac'></Link>
        <div className='hom butbot are'></div>
        <div></div>
      </div>

  )
}



export default Home