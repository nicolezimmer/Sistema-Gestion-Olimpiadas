import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonVolver from '../BotonVolver'

const URI = 'http://localhost:8000/pacientes/';
const URIarea = 'http://localhost:8000/areas/';

const CompCrearPaciente = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [DNI, setDNI] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [gender, setGender] = useState('');
    const [direction, setDirection] = useState('');
    const [health_insurance, setHealth_insurance] = useState('');
    const [nurse, setNurse] = useState('');
    const [areaId, setAreaId] = useState(''); 
    const [areas, setAreas] = useState([]); 

    const navigate = useNavigate();

    useEffect(() => {
        getAreas(); 
    }, []);

    // Procedimiento para obtener las áreas
    const getAreas = async () => {
        const res = await axios.get(URIarea);
        setAreas(res.data);
    };

    const guardar = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            name: name,
            surname: surname,
            DNI: DNI,
            birth_date: birth_date,
            gender: gender,
            direction: direction,
            health_insurance: health_insurance,
            nurse: nurse,
            id_areas: areaId, 
        });
        navigate('/pacientes');
    };

    return (
        <div className="container">
            <BotonVolver/>
            <h1>Crear registro</h1>
            <form onSubmit={guardar}>
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
                        value={birth_date}
                        onChange={(e) => setBirth_date(e.target.value)}
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
                        value={health_insurance}
                        onChange={(e) => setHealth_insurance(e.target.value)}
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

export default CompCrearPaciente;
