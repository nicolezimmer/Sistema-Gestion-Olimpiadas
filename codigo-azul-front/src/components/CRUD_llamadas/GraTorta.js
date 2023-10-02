import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', width: '100%' }}>
        <p style={{ margin: "0" }}>{`${payload[0].name}`}</p>
        <p style={{ margin: "0", color: "#244CDA" }}>{`${payload[0].value} Llamadas`}</p>
      </div>
    );
  }

  return null;
};

export const GraTorta = ({ registrosFiltrados }) => {
  const [cantidadEmergencias, setCantidadEmergencias] = useState(0);
  const [cantidadNormales, setCantidadNormales] = useState(0);

  useEffect(() => {
    // Contar cuántos registros son de cada tipo
    const emergencias = registrosFiltrados.filter(registro => registro.type === "Emergencia").length;
    const normales = registrosFiltrados.filter(registro => registro.type === "Normal").length;

    // Actualizar los estados
    setCantidadEmergencias(emergencias);
    setCantidadNormales(normales);
  }, [registrosFiltrados]);

  const Estado = [
    { name: "Emergencia", value: cantidadEmergencias },
    { name: "Normal", value: cantidadNormales },
  ];

  return (
    <div className='flex-item'>
      <p>Tipo de alertas</p>
      <ResponsiveContainer width={"100%"} aspect={2} >
        <PieChart width={500} height={300} margin={{ top: 15, right: 0, left: 0, bottom: 4 }}>
          <Pie dataKey="value" data={Estado} label={({ name }) => name}>
            <Cell fill={"#C0CEFF"} />
            <Cell fill={"#244CDA"} />
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
};
