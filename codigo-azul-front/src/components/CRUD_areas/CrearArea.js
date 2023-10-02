import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonVolver from '../BotonVolver'

const URI = 'http://localhost:8000/areas/'

const CompCrearRegistro = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    const navigate = useNavigate()

    const guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, description: description})
        navigate ('/areas')
    }


    return(
        <div className="container">
            <BotonVolver/>
            <h1>Crear registro</h1>
            <form onSubmit={guardar}>
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

export default CompCrearRegistro