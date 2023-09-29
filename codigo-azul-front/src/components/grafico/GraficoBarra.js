import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend,  ResponsiveContainer, Tooltip, XAxis, YAxis, Pie, Cell, PieChart } from "recharts";

const Semana = [{ dia: "Lun", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mar", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Mie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Jue", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Vie", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Sab", Llamadas: Math.floor(Math.random() * 100) + 50,},
{ dia: "Dom", Llamadas: Math.floor(Math.random() * 100) + 50,},
];

const Estado = [{ name: "Atendido", valor: Math.floor(Math.random() * 100) + 50, },
{ name: "No atendidos", valor: Math.floor(Math.random() * 100) + 50,}, 
];

const GraficoBarra = () => {
  return (
    <>
        <h5>Total de alertas de la ultima semana</h5>
        <ResponsiveContainer width={"50%"} aspect={"2"} >
            <BarChart data={Semana} width={500} height={300} margin={{top:5, right:80, left:20, bottom:5}} >
                <CartesianGrid strokeDasharray={"4 1 2"}/>
                <XAxis dataKey={"dia"} fontSize={"2vh"}/>
                <YAxis fontSize={"2vh"}/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey={"Llamadas"} fill='#244CDA'fontSize={"1vh"}/>
            </BarChart>
        </ResponsiveContainer>
        <h5>Total de alertas atendidas la ultima semana</h5>
        <ResponsiveContainer  width={"50%"} aspect={"2"}>
            <PieChart>
                <Pie dataKey="valor" data={Estado} >
                    <Cell fill={"#C0CEFF"} />
                    <Cell fill={"#244CDA"} />
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
        
    </>
  )
}

export default GraficoBarra;