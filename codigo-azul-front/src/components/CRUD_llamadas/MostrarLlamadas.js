// export default CompMostrarRegistros;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; // Importa la biblioteca moment

const URI = 'http://localhost:8000/llamadas/';
const URIusuario = 'http://localhost:8000/usuarios/';
const URIpaciente = 'http://localhost:8000/pacientes/';
const URIarea = 'http://localhost:8000/areas/';

const CompMostrarRegistros = () => {
    const [registros, setRegistros] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(false);
    const [usuarios, setUsuarios] = useState([]); 
    const [pacientes, setPacientes] = useState([]); 
    const [areas, setAreas] = useState([]); 

    useEffect(() => {
        getRegistros();
        getUsuarios();
        getPacientes();
        getAreas(); 

        // Inicia el sondeo cada 5 segundos (ajusta el intervalo según tus necesidades)
        const pollingInterval = setInterval(() => {
            getRegistros();
        }, 2000); // Sondeo cada 5 segundos

        // Detiene el sondeo cuando el componente se desmonta
        return () => clearInterval(pollingInterval);
    }, []);
    const getAreas = async () => {
        const res = await axios.get(URIarea);
        setAreas(res.data);
    };
    const getRegistros = async () => {
        const res = await axios.get(URI);
        setRegistros(res.data);
    }
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

    }

    const updateRegistro = async (registro) => {

        if (registro.status != 0) {
            const currentTime = moment().format('YYYY-MM-DD HH:mm:ss'); // Obtiene la hora actual en el formato deseado
            // registro = await axios.get(`${URI}${id}`); // Obtener el registro actual
            await axios.put(`${URI}${registro.id}`, { status: 0, finish_hour: currentTime }); // Actualiza el estado y la hora
            setUpdateStatus(true);
        }else{ console.log('llamada cortada')}

    }
    // 0 atendida, 1 en curso
    return (
        <div className='container'>
            <div>
                <Link to={`/llamadas/filtrar/area`} className='btn btn-primary mt-2 mb-2'>Filtrar por area</Link>
                <Link to={`/llamadas/Estadisticas`} className='btn btn-primary mt-2 mb-2'>Estadisticas</Link>
            </div>
            
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Tipo</th>
                                <th>Estado</th>
                                <th>Inicio</th>
                                <th>Fin</th>
                                <th>Usuario que Activo</th>
                                <th>DNI Paciente</th>
                                <th>Id area</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map((registro) => (
                                <tr key={registro.id}>
                                    <td>{registro.type}</td>
                                    <td>{registro.status  == 1 ? 'En curso' : 'Atendida'}</td>
                                    <td>{registro.start_hour}</td>
                                    <td>{registro.finish_hour}</td>
                                    <td>{getUsuarioNameById(registro.id_users)}</td>
                                    <td>{getPacienteDNIById(registro.id_pacient)}</td>
                                    <td>{getAreaNameById(registro.id_areas)}</td>

                                    <td>
                                        <button onClick={() => deleteRegistro(registro.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                        <button onClick={() => updateRegistro(registro)} className='btn btn-warning'><i className="fa-solid fa-bell-slash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarRegistros;
