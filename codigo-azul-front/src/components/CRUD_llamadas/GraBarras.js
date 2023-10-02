import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10%', width: '20vh' }}>
        <p style={{ margin: "0", }}>{`${label}`}</p>
        <p style={{ margin: "0", color: "#244CDA", }} >{`${payload[0].value}`} Llamadas</p>
      </div>
    );
  }
  return null;
};

export const GraBarras = ({
  registrosFiltrados,
  areasParaGraficar
}) => {


  const [llamadasPorArea, setLlamadasPorArea] = useState({});

  useEffect(() => {
    const contador = contarLlamadasPorArea();
    setLlamadasPorArea(contador);
  }, [registrosFiltrados, areasParaGraficar]);


  const contarLlamadasPorArea = () => {
    const contador = {};
    registrosFiltrados.forEach(llamada => {
      if (contador[llamada.id_areas]) {
        contador[llamada.id_areas]++;
      } else {
        contador[llamada.id_areas] = 1;
      }
    });
    return contador;
  };

  const datosParaGrafico = () => {
    return areasParaGraficar.map(area => ({
      NombreArea: area.name,
      CantidadLlamados: llamadasPorArea[area.id] || 0
    }));
  };

  const data = datosParaGrafico();

  return (
    <div className='flex-item'>
      <p>Llamadas por area </p>
      <ResponsiveContainer width={"100%"} aspect={2}>
        <BarChart
          data={data} 
          width={500} 
          height={300}
          margin={{
            top:5,
            right: 30,
            left:20,
            bottom:5
          }}>
          <CartesianGrid strokeDasharray="4 1 2"/>
          <XAxis dataKey={"NombreArea"}/>
          <YAxis/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey={"CantidadLlamados"} fill='#244CDA' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
