import React, { useState, useEffect } from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts';

export const GraLineas = ({
  registrosFiltrados
}) => {
  const [promedioTiempoRespuesta, setPromedioTiempoRespuesta] = useState(0);

  useEffect(() => {
    sacarPromedio();

  }, [registrosFiltrados]);

  const sacarPromedio =  () => {
    const tiempoTotal =  registrosFiltrados.reduce((total, registro) => {
      return total +  calcularTiempoDeRespuesta(registro);
    }, 0)
  
    const promedio =  tiempoTotal / registrosFiltrados.length;
     setPromedioTiempoRespuesta(promedio)
  }
  
  

  const calcularTiempoDeRespuesta = (llamada) => {
    const start_hour = new Date(llamada.start_hour).getTime()
    const finish_hour = new Date(llamada.finish_hour).getTime()
    return ((finish_hour - start_hour)/(1000 * 60))
  };

  const data = registrosFiltrados.map(llamada => ({
    TiempoDeRespuesta: calcularTiempoDeRespuesta(llamada),
    Id: llamada.id
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10%', width: '20vh' }}>
          <p style={{ margin: "0", }}>{`${label}`}</p>
          <p style={{ margin: "0", color: "#244CDA", }} >{`${payload[0].value} Minutos`} para atender la emergencia.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='flex-item'>
      <p>Promedio de Tiempo de Respuesta: {promedioTiempoRespuesta.toFixed(2)} minutos</p>

      <ResponsiveContainer width={"100%"} aspect={2}>
        <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 50, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray={"1vh 1vh 1vh "} />
          <XAxis dataKey="Id" />
          <YAxis label={{ value: 'Tiempo (minutos)', angle: -90}} />
          <Line type="monotone" dataKey="TiempoDeRespuesta" stroke="#244CDA" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}
