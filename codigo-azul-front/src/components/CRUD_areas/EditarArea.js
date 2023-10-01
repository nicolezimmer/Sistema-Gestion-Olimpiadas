import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BotonVolver from '../BotonVolver'

const URI = 'http://localhost:8000/areas/'

const CompEditarRegistro = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

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
            setDescription(registro.description);
        } catch (error) {
            console.error('Error al obtener el registro:', error);
        }
    };

    const editar = async (e) => {
        e.preventDefault();
        try {
            await axios.put(URI + id, {
                name: name,
                description: description,

            });
            navigate('/areas/');
        } catch (error) {
            console.error('Error al editar el registro:', error);
        }
    };

    return(
        <div className="container">
            <BotonVolver/>
            
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
                    <label className="form-label">Descripcion</label>
                    <input
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
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