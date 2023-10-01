import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Filtros from './Filtros';
import Resultados from './Resultados';

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

  const [fechaInicio, setFechaInicio] = useState(''); // Estado para la fecha de inicio
  const [fechaFin, setFechaFin] = useState('');       // Estado para la fecha de fin

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
      <Filtros
        areas={areas}
        areaBuscada={areaBuscada}
        tipoBuscado={tipoBuscado}
        estadoBuscado={estadoBuscado}
        setAreaBuscada={setAreaBuscada}
        setTipoBuscado={setTipoBuscado}
        setEstadoBuscado={setEstadoBuscado}
        fechaInicio={fechaInicio}
        setFechaInicio={setFechaInicio}
        fechaFin={fechaFin}
        setFechaFin={setFechaFin}
      />
      <Resultados
        registros={registros}
        areaBuscada={areaBuscada}
        tipoBuscado={tipoBuscado}
        estadoBuscado={estadoBuscado}
        deleteRegistro={deleteRegistro}
        updateRegistro={updateRegistro}
        getUsuarioNameById={getUsuarioNameById}
        getPacienteDNIById={getPacienteDNIById}
        getAreaNameById={getAreaNameById}
      />
    </div>
  );
};

export default CompFiltrarLlamadas;
