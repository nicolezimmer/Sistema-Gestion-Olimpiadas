import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CompCrearRegistro from './components/CRUD/CrearRegistro';
// import CompEditarRegistro from './components/CRUD/EditarRegistro';
import Home from './components/Home'
import CompMostrarRegistros from './components/CRUD_usuarios/MostrarRegistro';
import CompCrearRegistro from './components/CRUD_usuarios/CrearRegistro'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/usuarios/' element={<CompMostrarRegistros/>}/>
          <Route path='/usuarios/crear/' element={<CompCrearRegistro/>}/>
          {/*
          <Route path='/crear' element={<CompCrearRegistro/>}/>
          <Route path='/editar/:id' element={<CompEditarRegistro/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
