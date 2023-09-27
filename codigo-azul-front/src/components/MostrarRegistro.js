import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http:://localhost:8000/fram/'

const CompMostrarRegistros = () => {
    const [registro, setRegistro] = useState([])
    useEffect (()=>{
        getRegistros()
    }, [])

    //procedimiento para mostrar todos los registros 
    const getRegistros = async () => {

    }

    //procedimiento para eleminar un registro
    const deleteRegistro = async (id) => {

    }

    return (
        <div></div>
    )


}

export default CompMostrarRegistros