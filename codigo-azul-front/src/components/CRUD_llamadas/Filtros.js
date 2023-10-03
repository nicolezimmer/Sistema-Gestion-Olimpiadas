import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Filtros = ({
  areas,
  areaBuscada,
  tipoBuscado,
  estadoBuscado,
  setAreaBuscada,
  setTipoBuscado,
  setEstadoBuscado,
  fechaInicio,
  setFechaInicio,
  fechaFin,
  setFechaFin
}) => {

  
    const handleFechaInicioChange = (e) => {
      setFechaInicio(e.target.value);
    };
  
    const handleFechaFinChange = (e) => {
      setFechaFin(e.target.value);
    };
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <Navbar collapseOnSelect expand=""  variant="dark">
        <Container fluid style={{backgroundColor:"#fff",justifyContent:'space-between'}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{margin:"2vh",padding:"2vh",color:'black', border:"1px solid black"}}>Filtros</Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav navbarNav">
            <Nav className="mx-auto d-flex flex-column " >
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div className="mb-3 ">
                  <label className="form-label">Filtrar por Tipo</label>
                  <select
                    value={tipoBuscado}
                    onChange={(e) => setTipoBuscado(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Todos</option>
                    <option value="Emergencia">Emergencia</option>
                    <option value="Normal">Normal</option>
                  </select>
                </div>

                <div  >
                  <div >
                      <label className="form-label">Fecha de Inicio</label>
                      <input
                      type="date"
                      value={fechaInicio}
                      onChange={handleFechaInicioChange}
                      className="form-control"
                      />
                  </div>

                  <div className="mb-3" >
                      <label className="form-label" >Fecha de Fin</label>
                      <input
                      type="date"
                      value={fechaFin}
                      onChange={handleFechaFinChange}
                      className="form-control"
                      />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Filtrar por Estado</label>
                  <select
                    value={estadoBuscado}
                    onChange={(e) => setEstadoBuscado(e.target.value)}
                    className="form-select"
                  >   
                    <option value="">Todos</option>
                    <option value="1">En curso</option>
                    <option value="0">Atendida</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Filtrar por Área</label>
                  <select
                    value={areaBuscada}
                    onChange={(e) => setAreaBuscada(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Todas</option>
                    {areas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link to={`/llamadas/estadisticas/`} className='btn btn-primary mt-2 mb-2' style={{margin:"2vh",padding:"2vh", height:"8.5vh",}}>Estadisticas Generales</Link>
    </div>
    
  );
};

export default Filtros;
