import React from 'react';

const Filtros = ({
  areas,
  areaBuscada,
  tipoBuscado,
  estadoBuscado,
  setAreaBuscada,
  setTipoBuscado,
  setEstadoBuscado,
  rangoFechaInicio,
  setRangoFechaInicio,
  rangoFechaFin,
  setRangoFechaFin,
  filtroFechaActivado,
  setFiltroFechaActivado
}) => {
  return (
    <div>
      <div className="mb-3">
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
      <div>
      <div className="mb-3">
        <label className="form-label">Activar Filtro por Fecha</label>
        <input
          type="checkbox"
          checked={filtroFechaActivado}
          onChange={() => setFiltroFechaActivado(!filtroFechaActivado)}
          className="form-check-input"
        />
      </div>
      {filtroFechaActivado && ( 
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Fecha de Inicio</label>
            <input
              type="datetime-local"
              value={rangoFechaInicio}
              onChange={(e) => setRangoFechaInicio(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Fin</label>
            <input
              type="datetime-local"
              value={rangoFechaFin}
              onChange={(e) => setRangoFechaFin(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
      )}

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
  );
};

export default Filtros;
