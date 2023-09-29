import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./LOGOlogo.png";
import "./header.css"

export default function Head() {
  return (
    <div className='contain' style={{ padding: "2vh" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: 0 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}><img id='logo' src={logo} alt='logo'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{fontSize:'3vh'}} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={`/usuarios/`} className="nav-link" aria-current="page">Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link to={`/pacientes/`} className="nav-link">Pacientes</Link>
              </li>
              <li className="nav-item">
                <Link to={`/llamadas/`} className="nav-link">Alertas</Link>
              </li>
              <li className="nav-item">
                <Link to={`/areas/`} className="nav-link">Areas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
