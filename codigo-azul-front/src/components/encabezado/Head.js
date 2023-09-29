import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./LOGOlogo.png";
import "./header.css"

export default function Head() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link className="navbar-brand" to={`/`}><img id='logo' src={logo} alt='logo'></img></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={`/usuarios/`} class="nav-link active" aria-current="page" >Usuarios</Link>
            </li>
            <li class="nav-item">
              <Link to={`/pacientes/`} class="nav-link">Pacientes</Link>
            </li>
            <li class="nav-item">
              <Link to={`/pacientes/`} class="nav-link" >Alarmas</Link>
            </li>
            <li class="nav-item">
              <Link to={`/areas/`} class="nav-link " >Areas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


