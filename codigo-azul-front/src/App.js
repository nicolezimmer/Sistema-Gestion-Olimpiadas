import logo from './logo.svg';
import './App.css';

import CompMostrarRegistros from './components/MostrarRegistro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCrearRegistro from './components/CrearRegistro';
import CompEditarRegistro from './components/EditarRegistro';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompMostrarRegistros/>}/>
          <Route path='/crear' element={<CompCrearRegistro/>}/>
          <Route path='/editar/:id' element={<CompEditarRegistro/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
