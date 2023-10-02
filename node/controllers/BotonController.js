import moment from 'moment';
import PacienteModel from '../models/PacienteModel.js';
import AreaModel from '../models/AreaModel.js';
import LlamadaModel from '../models/LlamadaModel.js';

export const createLlamadaBoton = async (req, res) => {
  try {
    const { selectedCallType, textInputValue, user, selectedZone } = req.body;

    // Paso 1: Obtener el ID del paciente por su DNI
    const DNI = textInputValue;
    const pacient = await PacienteModel.findOne({ where: { DNI } });

    if (!pacient) {
      console.error('Paciente no encontrado con el DNI proporcionado:', DNI);
      res.json({ success: false, message: 'Paciente no encontrado con el DNI proporcionado' });
      return;
    }

    // Paso 2: Obtener el ID del área basado en el nombre de la zona seleccionada
    const area = await AreaModel.findOne({ where: { name: selectedZone } });

    if (!area) {
      console.error('Área no encontrada con el nombre proporcionado:', selectedZone);
      res.json({ success: false, message: 'Área no encontrada con el nombre proporcionado' });
      return;
    }

    // Paso 3: Obtener la hora actual en el formato deseado
    const formattedStartHour = moment().format('YYYY-MM-DD HH:mm:ss');

    // Paso 4: Insertar los datos en la tabla calls utilizando el modelo LlamadaModel
    const newLlamada = {
      type: selectedCallType,
      status: 1,
      start_hour: formattedStartHour,
      id_users: user.id,
      id_pacient: pacient.id,
      id_areas: area.id,
    };

    await LlamadaModel.create(newLlamada);
    res.json({ success: true, message: 'Llamada registrada exitosamente' });
  } catch (error) {
    console.error('Error al crear la llamada:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};
