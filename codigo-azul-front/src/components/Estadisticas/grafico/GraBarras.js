import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Semana = [{ dia: "Lun", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mar", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Jue", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Vie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Sab", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Dom", Llamadas: Math.floor(Math.random() * 100) + 50,},
];



const URI = 'http://localhost:8000/usuarios/';
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc' ,  padding: '10%', width: '20vh' }}>
          <p style={{margin:"0", }} >{`${label}`}</p>
          <p style={{margin:"0", color:"#244CDA",}} >{`${payload[0].value}`} Llamadas</p>
        </div>
      );
    }
  
    return null;
};

export const GraBarras = () => {

  const [registros, setRegistros] = useState([])
    useEffect (()=>{
        getRegistros()
    }, [])

    const getRegistros = async () => {
        const res = await axios.get(URI)
        setRegistros(res.data)
    }

  return (
    <div className='flex-item'>
        <p>Total de alertas de la ultima semana</p>
            <ResponsiveContainer width={"100%"} aspect={1.9}>
                <BarChart data={registros} width={500} height={300} margin={{top:5, right:50, left:0, bottom:0}} >
                    <CartesianGrid strokeDasharray={"1vh 1vh 1vh "}/>    
                    <XAxis dataKey={"name"} fontSize={"2vh"}/>
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend/>
                    <Bar dataKey={"id"} fill='#244CDA'/>
                </BarChart>
            </ResponsiveContainer>
    </div>
  )
}
