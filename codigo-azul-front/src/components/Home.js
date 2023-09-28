import React from 'react'
import {Link} from 'react-router-dom'


export const Home = () => {
  return (
    <div>
        <Link to={`/usuarios/`} className='btn btn-primary mt-2 mb-2'>CRUD usuarios</Link>
        <button>CRUD areas</button>
        <button>CRUD pacientes</button>
        <button>read llamadas</button>

    </div>
  )
}

export default Home