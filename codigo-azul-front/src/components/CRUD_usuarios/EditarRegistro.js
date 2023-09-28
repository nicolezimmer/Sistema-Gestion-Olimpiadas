import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/fram/';

const CompEditarRegistro = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [type, setType] = useState('');

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
            setUsername(registro.username);
            setPasswd(registro.passwd);
            setType(registro.type);
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
                username: username,
                passwd: passwd,
                type: type,
            });
            navigate('/');
        } catch (error) {
            console.error('Error al editar el registro:', error);
        }
    };

    return(
        <div className="container">
            <h1>Editar registro</h1>
            <form onSubmit={editar}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"
                    
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={surname}
                        onChange={(e)=> setSurname(e.target.value)}
                        type="text"
                        className="form-control"
                    
                    />               
                </div>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        type="text"
                        className="form-control"
                    
                    />               
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        value={passwd}
                        onChange={(e)=> setPasswd(e.target.value)}
                        type="text"
                        className="form-control"
                    
                    />               
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <input
                        value={type}
                        onChange={(e)=> setType(e.target.value)}
                        type="text"
                        className="form-control"
                    
                    />                   
               </div>
               <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>

        
    )    
}

export default CompEditarRegistro