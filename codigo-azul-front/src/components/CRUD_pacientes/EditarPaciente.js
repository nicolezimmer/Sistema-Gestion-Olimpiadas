import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BotonVolver from '../BotonVolver'

const URI = 'http://localhost:8000/pacientes/';
const URIarea = 'http://localhost:8000/areas/';

const CompEditarPaciente = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [DNI, setDNI] = useState('');
    const [birthDate, setBirthDate] = useState(''); // Cambiado el tipo de dato a date
    const [gender, setGender] = useState('');
    const [direction, setDirection] = useState('');
    const [healthInsurance, setHealthInsurance] = useState('');
    const [nurse, setNurse] = useState('');
    const [areaId, setAreaId] = useState(''); // Cambiado a 'areaId'
    const [areas, setAreas] = useState([]); // Estado para las áreas

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getRegistroById();
        getAreas(); // Llamada a la función para obtener las áreas cuando el componente se monta
    }, []);

    const getRegistroById = async () => {
        try {
            const response = await axios.get(URI + id);
            const registro = response.data; // Suponiendo que la respuesta contiene los datos del registro
            setName(registro.name);
            setSurname(registro.surname);
            setDNI(registro.DNI);
            setBirthDate(registro.birth_date);
            setGender(registro.gender);
            setDirection(registro.direction);
            setHealthInsurance(registro.health_insurance);
            setNurse(registro.nurse);
            setAreaId(registro.id_areas);
        } catch (error) {
            console.error('Error al obtener el registro:', error);
        }
    };

    const getAreas = async () => {
        const res = await axios.get(URIarea);
        setAreas(res.data);
    };

    const editar = async (e) => {
        e.preventDefault();
        try {
            await axios.put(URI + id, {
                name: name,
                surname: surname,
                DNI: DNI,
                birth_date: birthDate,
                gender: gender,
                direction: direction,
                health_insurance: healthInsurance,
                nurse: nurse,
                id_areas: areaId, // Usar areaId en lugar de idAreas
            });
            navigate('/pacientes/');
        } catch (error) {
            console.error('Error al editar el registro:', error);
        }
    };

    return (
        <div className="container">
            <BotonVolver/>
            <h1>Editar registro</h1>
            <form onSubmit={editar}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input
                        value={DNI}
                        onChange={(e) => setDNI(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        type="date" // Cambiado a tipo date
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Género</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select"
                    >
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Seguro de Salud</label>
                    <input
                        value={healthInsurance}
                        onChange={(e) => setHealthInsurance(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enfermero</label>
                    <input
                        value={nurse}
                        onChange={(e) => setNurse(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Área</label>
                    <select
                        value={areaId}
                        onChange={(e) => setAreaId(e.target.value)}
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
}

export default CompEditarPaciente;
