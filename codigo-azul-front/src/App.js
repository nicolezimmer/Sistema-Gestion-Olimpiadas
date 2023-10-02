import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/Login/Login';

// imports para usuarios
import CompMostrarUsuario from './components/CRUD_usuarios/MostrarUsuarios';
import CompCrearUsuario from './components/CRUD_usuarios/CrearUsuario';
import CompEditarUsuario from './components/CRUD_usuarios/EditarUsuario';

// imports para pacientes
import CompMostrarPacientes from './components/CRUD_pacientes/MostrarPacientes';
import CompCrearPaciente from './components/CRUD_pacientes/CrearPaciente';
import CompEditarPaciente from './components/CRUD_pacientes/EditarPaciente';

// import para áreas
import CompMostrarArea from './components/CRUD_areas/MostrarArea';
import CompCrearArea from './components/CRUD_areas/CrearArea';
import CompEditarArea from './components/CRUD_areas/EditarArea';

import CompMostrarLlamadas from './components/CRUD_llamadas/MostrarLlamadas';
import Head from './components/encabezado/Head';
import { useAuth } from './components/Context/AuthContext';

function App() {
  const { user } = useAuth();
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <BrowserRouter>
        {!isLoginPage && <Head />}
        <Routes>
          {user ? (
            <>
              <Route path='/' element={<Home />} />

              {/* Crud usuario */}
              <Route path='/usuarios/' element={<CompMostrarUsuario />} />
              <Route path='/usuarios/editar/:id' element={<CompEditarUsuario />} />
              <Route path='/usuarios/crear/' element={<CompCrearUsuario />} />

              {/* Crud paciente */}
              <Route path='/pacientes/' element={<CompMostrarPacientes />} />
              <Route path='/pacientes/editar/:id' element={<CompEditarPaciente />} />
              <Route path='/pacientes/crear/' element={<CompCrearPaciente />} />

              {/* Crud paciente */}
              <Route path='/areas/' element={<CompMostrarArea />} />
              <Route path='/areas/editar/:id' element={<CompEditarArea />} />
              <Route path='/areas/crear/' element={<CompCrearArea />} />

              {/* Crud llamadas */}
              <Route path='/llamadas/' element={<CompMostrarLlamadas />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/login" />} />
          )}
          {/* Página de inicio de sesión */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;