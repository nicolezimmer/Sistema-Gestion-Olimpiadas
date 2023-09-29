import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/'

const CompCrearRegistro = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [username, setUsername] = useState("")
    const [passwd, setPasswd] = useState("")
    const [type, setType] = useState("")

    const navigate = useNavigate()

    const guardar = async (e) => {
        //esto es para evitar el submit que hace el formulario
        e.preventDefault()
        await axios.post(URI, {name: name, surname: surname, username: username, passwd: passwd, type: type})
        navigate ('/usuarios')
    }


    return(
        <div className="container">
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

export default CompCrearRegistro