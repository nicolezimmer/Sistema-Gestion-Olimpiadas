
import express from "express";
import {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuarioById,
    deleteUsuarioById,
} from '../controllers/UsuarioController.js'
import * as pacienteController from '../controllers/PacienteController.js';
const router = express.Router();

// Rutas para los usuarios
router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuarioById);
router.delete("/usuarios/:id", deleteUsuarioById);

//Rutas para pacientes
router.get('/pacientes', pacienteController.getAllPatients);
router.get('/pacientes/:id', pacienteController.getPatientById);
router.post('/pacientes', pacienteController.createPatient);
router.put('/pacientes/:id', pacienteController.updatePatientById);
router.delete('/pacientes/:id', pacienteController.deletePatientById);


export default router;
