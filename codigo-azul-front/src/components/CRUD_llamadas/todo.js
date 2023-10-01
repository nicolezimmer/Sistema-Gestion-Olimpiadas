import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const URI = 'http://localhost:8000/llamadas/';
const URIusuario = 'http://localhost:8000/usuarios/';
const URIpaciente = 'http://localhost:8000/pacientes/';
const URIarea = 'http://localhost:8000/areas/';

const CompFiltrarLlamadas = () => {
  const [registros, setRegistros] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [areaBuscada, setAreaBuscada] = useState('');
  const [tipoBuscado, setTipoBuscado] = useState('');
  const [estadoBuscado, setEstadoBuscado] = useState('');
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    getRegistros();
    getUsuarios();
    getPacientes();
    getAreas();

    const pollingInterval = setInterval(() => {
      getRegistros();
    }, 5000);

    return () => clearInterval(pollingInterval);
  }, []);

  const getAreas = async () => {
    const res = await axios.get(URIarea);
    setAreas(res.data);
  };

  const getRegistros = async () => {
    const res = await axios.get(URI);
    setRegistros(res.data);
  };

  const getUsuarios = async () => {
    const res = await axios.get(URIusuario);
    setUsuarios(res.data);
  };

  const getPacientes = async () => {
    const res = await axios.get(URIpaciente);
    setPacientes(res.data);
  };

  const getUsuarioNameById = (usuarioId) => {
    const usuario = usuarios.find((a) => a.id === usuarioId);
    return usuario ? usuario.username : '';
  };

  const getPacienteDNIById = (pacienteId) => {
    const paciente = pacientes.find((a) => a.id === pacienteId);
    return paciente ? paciente.DNI : '';
  };

  const getAreaNameById = (areaId) => {
    const area = areas.find((a) => a.id === areaId);
    return area ? area.name : '';
  };

  const deleteRegistro = async (id) => {
    await axios.delete(`${URI}${id}`);
    getRegistros();
  };

  const updateRegistro = async (registro) => {
    if (registro.status !== 0) {
      const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      await axios.put(`${URI}${registro.id}`, { status: 0, finish_hour: currentTime });
      setUpdateStatus(true);
    } else {
      console.log('Llamada cortada');
    }
  };

  return (
    <div className="container">
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
          {/* Agrega más opciones de estado según tus necesidades */}
        </select>
      </div>

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
    </div>
  );
};

export default CompFiltrarLlamadas;
