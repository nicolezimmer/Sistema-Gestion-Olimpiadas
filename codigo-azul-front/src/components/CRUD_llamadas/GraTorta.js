import React from 'react'
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts'

const Estado = [
  { name: "Emergencias", valor: Math.floor(Math.random() * 100)},
  { name: "Normal", valor: Math.floor(Math.random() * 100)}, 
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc' ,  padding: '10px', width: '100%' }}>
        <p style={{margin:"0", }} >{`${payload[0].name}`}</p>
        <p style={{margin:"0", color:"#244CDA",}} >{`${payload[0].value}`} Llamadas</p>
      </div>
    );
  }

  return null;
};

export const GraTorta = ({}) => {
  return (
    <div className='flex-item'>
        <p>Tipo de alertas de la ultima semana</p>
            <ResponsiveContainer width={"100%"} aspect={2} >
                <PieChart width={500} height={300} margin={{top:15, right:0, left:0, bottom:4}}>
                    <Pie dataKey="valor" data={Estado} label={({ name }) => name}>
                        <Cell fill={"#C0CEFF"} />
                        <Cell fill={"#244CDA"} />
                    </Pie>
                    <Tooltip content={<CustomTooltip />}/>
                </PieChart>
            </ResponsiveContainer>
    </div>
  )
}
