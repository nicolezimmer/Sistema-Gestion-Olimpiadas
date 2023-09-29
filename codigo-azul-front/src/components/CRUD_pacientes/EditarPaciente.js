import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/pacientes/';

const CompEditarPaciente = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [DNI, setDNI] = useState('');
    const [birthDate, setBirthDate] = useState(''); // Cambiado el tipo de dato a date
    const [gender, setGender] = useState('');
    const [direction, setDirection] = useState('');
    const [healthInsurance, setHealthInsurance] = useState('');
    const [nurse, setNurse] = useState('');
    const [idAreas, setIdAreas] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getRegistroById();
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
            setIdAreas(registro.id_areas);
        } catch (error) {
            console.error('Error al obtener el registro:', error);
        }
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
                id_areas: idAreas,
            });
            navigate('/pacientes/');
        } catch (error) {
            console.error('Error al editar el registro:', error);
        }
    };

    return (
        <div className="container">
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
                    <label className="form-label">ID Áreas</label>
                    <input
                        value={idAreas}
                        onChange={(e) => setIdAreas(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    );
}

export default CompEditarPaciente;
