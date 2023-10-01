import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonVolver from '../BotonVolver'

const URI = 'http://localhost:8000/usuarios/';

const CompCrearUsuario = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [type, setType] = useState('0'); // Establece el valor inicial en '0'

    const navigate = useNavigate();

    const guardar = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            name: name,
            surname: surname,
            username: username,
            passwd: passwd,
            type: parseInt(type), // Convierte el valor a número
        });
        navigate('/usuarios');
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
                    <label className="form-label">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="form-select"
                    >
                        <option value="0">Generico</option>
                        <option value="1">Administrador</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
            </form>
        </div>
    );
};

export default CompCrearUsuario;
