import React from 'react';

const Resultados = ({
  registros,
  areaBuscada,
  tipoBuscado,
  estadoBuscado,
  deleteRegistro,
  updateRegistro,
  getUsuarioNameById,
  getPacienteDNIById,
  getAreaNameById,
}) => {
  return (
    <div className="row">
      <div className="col">
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Usuario que Activo</th>
              <th>DNI Paciente</th>
              <th>Área</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registros
              .filter((registro) => {
                if (areaBuscada === "") {
                  return true;
                } else {
                  return registro.id_areas == areaBuscada;
                }
              })
              .filter((registro) => {
                if (tipoBuscado === "") {
                  return true;
                } else {
                  return registro.type === tipoBuscado;
                }
              })
              .filter((registro) => {
                if (estadoBuscado === "") {
                  return true;
                } else {
                  return registro.status === estadoBuscado
                }
              })
              .map((registro) => (
                <tr key={registro.id}>
                  <td>{registro.type}</td>
                  <td>{registro.status === 1 ? 'En curso' : 'Atendida'}</td>
                  <td>{registro.start_hour}</td>
                  <td>{registro.finish_hour}</td>
                  <td>{getUsuarioNameById(registro.id_users)}</td>
                  <td>{getPacienteDNIById(registro.id_pacient)}</td>
                  <td>{getAreaNameById(registro.id_areas)}</td>

                  <td>
                    <button onClick={() => deleteRegistro(registro.id)} className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button onClick={() => updateRegistro(registro)} className="btn btn-warning">
                      <i className="fa-solid fa-bell-slash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resultados;
