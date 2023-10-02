import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const CodigoAzul = () => {
  const URI = 'http://localhost:8000/llamadas/';
  const URIpaciente = 'http://localhost:8000/pacientes/';
  const URIarea = 'http://localhost:8000/areas/';

  const { user } = useAuth();
  const [pacientes, setPacientes] = useState([]);
  const [areas, setAreas] = useState([]); 
  const [type, setType] = useState("");
  const [id_areas, setId_areas] = useState(null);
  const [pacienteDNI, setPacienteDNI]= useState('');

  const navigate = useNavigate()

  useEffect(() => {  
    getPacientes();
    getAreas();
    
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user.id

    await axios.post(URI, {
      type: type,
      status: 1,
      start_hour: moment().format('YYYY-MM-DD HH:mm:ss'),
      id_users: userId, // Usar userId aquí
      id_pacient: getPacienteIdByDNI(pacienteDNI),
      id_areas: id_areas,
    });
    navigate('/llamadas');
  };
  
  const getPacientes = async () => {
    try {
      const res = await axios.get(URIpaciente);
      setPacientes(res.data);
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
    }
  };

  const getAreas = async () => {
    try {
      const res = await axios.get(URIarea);
      setAreas(res.data);
    } catch (error) {
      console.error("Error al obtener áreas:", error);
    }
  };

  const getPacienteIdByDNI = (pacienteDNI) => {
    const paciente = pacientes.find((a) => a.DNI === pacienteDNI);
    return paciente ? paciente.id : '';
  };

  return (
    <div className="container">
      <h2>Activar Codigo Azul</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-select"
          >
            <option value="">Seleccione tipo de llamado </option>
            <option value="Emergencia">Emergencia</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">DNI Paciente</label>
          <input
            value={pacienteDNI}
            onChange={(e) => setPacienteDNI(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Área</label>
          <select
            value={id_areas}
            onChange={(e) => setId_areas(e.target.value)}
            className="form-select"
          >
            <option value="">Seleccione un área</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i></button>
      </form>
    </div>
  );
};
