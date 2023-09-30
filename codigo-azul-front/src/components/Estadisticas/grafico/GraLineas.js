import React from 'react'
import { CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts'

const Semana = [{ dia: "Lun", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mar", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Jue", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Vie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Sab", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Dom", Llamadas: Math.floor(Math.random() * 100) + 50,},
];

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

export const GraLineas = () => {
  return (
    <div className='flex-item'>
        <p>Total de alertas atendidas la ultima semana</p>
            <ResponsiveContainer  width={"100%"} aspect={1.9}>
                <LineChart data={Semana} width={500} height={300} margin={{top:5, right:50, left:0, bottom:0}}>
                    <CartesianGrid strokeDasharray={"1vh 1vh 1vh "}/>
                    <XAxis dataKey="dia" />
                    <YAxis />
                    
                    <Line type="monotone" dataKey="Llamadas" stroke="#244CDA" />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend/>   
                </LineChart>
            </ResponsiveContainer>
    </div>
  )
}
