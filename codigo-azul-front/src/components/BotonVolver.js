import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BotonVolver = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const volver = () => {
    navigate(-1);
  }

  // No mostrar el botón si estamos en la ruta '/'
  if (location.pathname === '/') {
    return null;
  }

  return (
    <button className='hom usu' style={{background:"#244CDA",border:"none",borderRadius:"5px",margin: "2vh 0vh 1vh 12.99vh", height:"100%",width:"15vh",color: "#fff",}} onClick={volver}>
      Volver
    </button>
  );
}

export default BotonVolver;


