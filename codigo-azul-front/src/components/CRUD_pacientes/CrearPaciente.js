import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/pacientes/';

const CompCrearPaciente = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [DNI, setDNI] = useState('');
    const [birth_date, setBirth_date] = useState(''); // Cambiado el nombre de la variable
    const [gender, setGender] = useState('');
    const [direction, setDirection] = useState('');
    const [health_insurance, setHealth_insurance] = useState('');
    const [nurse, setNurse] = useState('');
    const [id_areas, setId_areas] = useState(''); // Cambiado el nombre de la variable

    const navigate = useNavigate();

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
            id_areas: id_areas,
        });
        navigate('/pacientes');
    };

    return (
        <div className="container">
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
                    <input
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        type="text"
                        className="form-control"
                    />
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
                    <label className="form-label">ID Áreas</label>
                    <input
                        value={id_areas}
                        onChange={(e) => setId_areas(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    );
}

export default CompCrearPaciente;
