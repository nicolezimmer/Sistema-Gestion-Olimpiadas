import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'


// imports para usuarios
import CompMostrarUsuario from './components/CRUD_usuarios/MostrarUsuarios'
import CompCrearUsuario from './components/CRUD_usuarios/CrearUsuario'
import CompEditarUsuario from './components/CRUD_usuarios/EditarUsuario'

//imports para paciente
import CompMostrarPacientes from './components/CRUD_pacientes/MostrarPacientes'
import CompCrearPaciente from './components/CRUD_pacientes/CrearPaciente'
import CompEditarPaciente from './components/CRUD_pacientes/EditarPaciente'

//import para area
import CompMostrarArea from './components/CRUD_areas/MostrarArea'
import CompCrearArea from './components/CRUD_areas/CrearArea'
import CompEditarArea from './components/CRUD_areas/EditarArea'

import CompMostrarLlamadas from './components/CRUD_llamadas/MostrarLlamadas'


import Head from './components/encabezado/Head.js'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          {/* Crud usuario */}
          <Route path='/usuarios/' element={<CompMostrarUsuario/>}/>
          <Route path='/usuarios/editar/:id' element={<CompEditarUsuario/>}/>
          <Route path='/usuarios/crear/' element={<CompCrearUsuario/>}/>

          {/* Crud paciente */}
          <Route path='/pacientes/' element={<CompMostrarPacientes/>}/>
          <Route path='/pacientes/editar/:id' element={<CompEditarPaciente/>}/>
          <Route path='/pacientes/crear/' element={<CompCrearPaciente/>}/>

          {/* Crud paciente */}
          <Route path='/areas/' element={<CompMostrarArea/>}/>
          <Route path='/areas/editar/:id' element={<CompEditarArea/>}/>
          <Route path='/areas/crear/' element={<CompCrearArea/>}/>

          {/* Crud llamadas */}
          <Route path='/llamadas/' element={<CompMostrarLlamadas/>}/>

          {/* <Route path='/areas/editar/:id' element={<CompEditarArea/>}/>
          <Route path='/areas/crear/' element={<CompCrearArea/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
