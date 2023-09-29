import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/pacientes/'

const CompMostrarPacientes = () => {
    const [registros, setRegistros] = useState([])
    useEffect(() => {
        getRegistros()
    }, [])

    // Procedimiento para mostrar todos los registros
    const getRegistros = async () => {
        const res = await axios.get(URI)
        setRegistros(res.data)
    }

    // Procedimiento para eliminar un registro
    const deleteRegistro = async (id) => {
        await axios.delete(`${URI}${id}`)
        getRegistros()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={`/pacientes/crear/`} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>

                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>DNI</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Género</th>
                                <th>Dirección</th>
                                <th>Obra Social</th>
                                <th>Enfermero Asignado</th>
                                <th>Area</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map((registro) => (
                                <tr key={registro.id}>
                                    <td>{registro.name}</td>
                                    <td>{registro.surname}</td>
                                    <td>{registro.DNI}</td>
                                    <td>{registro.birth_date}</td>
                                    <td>{registro.gender}</td>
                                    <td>{registro.direction}</td>
                                    <td>{registro.health_insurance}</td>
                                    <td>{registro.nurse}</td>
                                    <td>{registro.id_areas}</td>
                                    <td>
                                        <Link to={`/pacientes/editar/${registro.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => deleteRegistro(registro.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
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

export default CompMostrarPacientes
