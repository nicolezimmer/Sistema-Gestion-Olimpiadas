// Importar el modelo PacienteModel
import PacienteModel from "../models/PacienteModel.js";

// Mostrar todos los registros de pacientes
export const getAllPatients = async (req, res) => {
    try {
        const patients = await PacienteModel.findAll();
        res.json(patients);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar un paciente por su ID
export const getPatientById = async (req, res) => {
    try {
        const patient = await PacienteModel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(patient);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Crear un nuevo paciente
export const createPatient = async (req, res) => {
    try {
        await PacienteModel.create(req.body);
        res.json({ message: "Paciente creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar información de un paciente por su ID
export const updatePatientById = async (req, res) => {
    try {
        await PacienteModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Información del paciente actualizada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar un paciente por su ID
export const deletePatientById = async (req, res) => {
    try {
        await PacienteModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Paciente eliminado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
