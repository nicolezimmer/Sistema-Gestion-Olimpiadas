import React, { useState } from 'react';
import ZonePicker from './ZonePicker';

export const CodigoAzul = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedCallType, setSelectedCallType] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  const handleButtonPress = async () => {
    if (!showForm) {
      setShowForm(true);
    } else {
      // Realizar la solicitud de creación de llamada aquí
      try {
        const formData = {
          selectedCallType,
          textInputValue,
          user,
          selectedZone,
        };

        const response = await fetch('http://localhost:8000/boton', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Llamada registrada con éxito, puedes realizar acciones adicionales aquí
          setShowForm(false);
          setSelectedZone('');
          setSelectedCallType('');
          setTextInputValue('');
        } else {
          // Manejar el error aquí, por ejemplo, mostrar un mensaje de error
          const data = await response.json();
          alert('Error', data.message);
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Error', 'Hubo un problema al registrar la llamada');
      }
    }
  };

  const handleImagePress = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleImagePress}>
        <img src="./boton.png" alt="Botón" />
      </button>

      {showForm && (
        <div className="form">
          <ZonePicker selectedZone={selectedZone} onZoneChange={setSelectedZone} />
          <label className="common-text">Selecciona el tipo de llamado:</label>
          <select value={selectedCallType} onChange={(e) => setSelectedCallType(e.target.value)}>
            <option value="">-----</option>
            <option value="Normal">Normal</option>
            <option value="Emergencia">Emergencia</option>
          </select>

          <input
            placeholder="DNI paciente"
            className="input"
            type="text"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            maxLength="8"
          />

          <button className="activate-button" onClick={handleButtonPress}>
            Activar
          </button>
        </div>
      )}
    </div>
  );
};
