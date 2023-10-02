import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ZonePicker = ({ selectedZone, onZoneChange }) => {
  const [zoneNames, setZoneNames] = useState([]);
  const [selectedZoneName, setSelectedZoneName] = useState(selectedZone && selectedZone.name);

  useEffect(() => {
    // Obtener los nombres de todas las zonas desde la API
    axios.get('http://localhost:8000/areas/all-names') // Utiliza la nueva ruta '/areas/all-names'
      .then(response => {
        setZoneNames(response.data);
      })
      .catch(error => {
        console.error('Error al obtener nombres de zonas:', error);
      });
  }, []);

  const handleZoneChange = async (zoneName) => {
    try {
      const response = await axios.get("http://localhost:8000/areas/name/${zoneName}");
      const selectedArea = response.data;

      setSelectedZoneName(selectedArea.name);
      onZoneChange(selectedArea); // Notifica al componente padre con la zona completa
    } catch (error) {
      console.error('Error al obtener la zona por nombre:', error);
    }
  };

  return (
    <div>
      <label>Selecciona una zona:</label>
      <select
        value={selectedZoneName}
        onChange={(e) => handleZoneChange(e.target.value)}
      >
        <option value="">-----</option>
        {zoneNames.map((zoneName, index) => (
          <option key={index} value={zoneName}>
            {zoneName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ZonePicker;