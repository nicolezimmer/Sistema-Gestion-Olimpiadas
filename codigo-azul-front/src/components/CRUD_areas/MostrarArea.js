import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/areas/'

const CompMostrarRegistros = () => {
    const [name, setName] = useState([])
    useEffect (()=>{
        getRegistros()
    }, [])

    //procedimiento para mostrar todos los registros 
    const getRegistros = async () => {
        //axios es una libreria que permite hacer peticiones http, en este caso se le esta haciendo una peticion get
        //esto se lo esta devolviendo en una response, la cual guarde en la const 'res'
        const res = await axios.get(URI)
        //en el estado de los registros que cree mas arriba, voy a guardar la data de la respuesta que entrego axios 
        setRegistros(res.data)
    }

    //procedimiento para eleminar un registro
    const deleteRegistro = async (id) => {
        await axios.delete(`${URI}${id}`)
        getRegistros()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <Link to={`/usuarios/crear/`} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>

                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>title</th>
                                <th>content</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map ((registro)=>(
                                <tr key={registro.id}>
                                    <td>{registro.name}</td>
                                    <td>{registro.surname}</td>
                                    <td>{registro.type}</td>
                                    <td>
                                        <Link to={`/usuarios/editar/${registro.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteRegistro(registro.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
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

export default CompMostrarRegistros