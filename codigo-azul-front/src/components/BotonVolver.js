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
    <button className='hom usu' style={{background:"#244CDA",border:"none",borderRadius:"5px",margin: "2vh 0vh 1vh 0vh", height:"8vh",width:"8vh",color: "#fff",}} onClick={volver}>
      <i className="fa-solid fa-arrow-left-long"></i>
    </button>
  );
}

export default BotonVolver;


