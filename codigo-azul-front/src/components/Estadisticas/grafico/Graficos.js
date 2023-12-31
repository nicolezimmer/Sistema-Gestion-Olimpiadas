import React, {useState, useEffect} from 'react'
import "./graficos.css"
import { GraBarras } from '../../CRUD_llamadas/GraBarras'
import { GraLineas } from '../../CRUD_llamadas/GraLineas'
import { GraTorta } from '../../CRUD_llamadas/GraTorta'
import Filtros from '../../CRUD_llamadas/Filtros'
import Resultados from '../../CRUD_llamadas/Resultados'
import axios from 'axios'
import moment from 'moment'

const Graficos = () => {
  
  const URI = 'http://localhost:8000/llamadas/'
  const URIusuario = 'http://localhost:8000/usuarios/'
  const URIpaciente = 'http://localhost:8000/pacientes/'
  const URIarea = 'http://localhost:8000/areas/'

  const [registros, setRegistros] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [areaBuscada, setAreaBuscada] = useState('');
  const [tipoBuscado, setTipoBuscado] = useState('');
  const [estadoBuscado, setEstadoBuscado] = useState('');
  const [areas, setAreas] = useState([]);
  const [areasParaGraficar, setAreasParaGraficar] = useState([])

  const [rangoFechaInicio, setRangoFechaInicio] = useState(''); 
  const [rangoFechaFin, setRangoFechaFin] = useState(''); 
  const [filtroFechaActivado, setFiltroFechaActivado] = useState(false);

  const [registrosFiltrados, setRegistrosFiltrados] = useState([]);

  const fechaInicio = new Date(rangoFechaInicio)
  const fechaFin = new Date(rangoFechaFin)
  const filtrarRegistros = () => {
    const registrosFiltrados = registros
      .filter((registro) => {
        if (areaBuscada === "") {
          setAreasParaGraficar(areas)
          return true;
        } else {
          if(registro.id_areas == areaBuscada){
            setAreasParaGraficar(getAreaById(registro.id_areas))
            return true;
          }else return false
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
      .filter((registro) => {
        if (!filtroFechaActivado) {
          return true
        }
        const startHour = new Date(registro.start_hour)
        const finishHour = new Date(registro.finish_hour)
        return startHour >= fechaInicio && finishHour <= fechaFin
      });

    setRegistrosFiltrados(registrosFiltrados);
  };
  React.useEffect(() => {
    filtrarRegistros();
  }, [registros, areaBuscada, tipoBuscado, estadoBuscado, rangoFechaInicio, rangoFechaFin, filtroFechaActivado]);


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

  const getAreaById = (areaId) => {
    const area = areas.find((a) => a.id === areaId);
    return [area] 
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
    <div className='flex-container'>
        <GraBarras
            registrosFiltrados={registrosFiltrados}
            areasParaGraficar={areasParaGraficar}
          />
          <GraLineas
            registrosFiltrados={registrosFiltrados}
          />
          <GraTorta
            registrosFiltrados={registrosFiltrados}
          />
    </div>
  )
}

export default Graficos;