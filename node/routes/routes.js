import express from "express";
import * as UsuarioController from '../controllers/UsuarioController.js';
import * as PacienteController from '../controllers/PacienteController.js';
import * as AreaController from '../controllers/AreaController.js';
import * as LlamadaController from '../controllers/LlamadaController.js';
import * as BotonController from '../controllers/BotonController.js';

import * as BotonController from '../controllers/BotonController.js';

const router = express.Router();

// Ruta para login
router.post("/login", UsuarioController.login);

// Ruta para llamadas desde el boton
router.post("/boton", BotonController.createLlamadaBoton)

// Rutas para los usuarios
router.get("/usuarios", UsuarioController.getAllUsuarios);
router.get("/usuarios/:id", UsuarioController.getUsuarioById);
router.post("/usuarios", UsuarioController.createUsuario);
router.put("/usuarios/:id", UsuarioController.updateUsuarioById);
router.delete("/usuarios/:id", UsuarioController.deleteUsuarioById);

// Rutas para pacientes
router.get('/pacientes', PacienteController.getAllPatients);
router.get('/pacientes/:id', PacienteController.getPatientById);
router.post('/pacientes', PacienteController.createPatient);
router.put('/pacientes/:id', PacienteController.updatePatientById);
router.delete('/pacientes/:id', PacienteController.deletePatientById);

// Rutas para áreas
router.get('/areas', AreaController.getAllAreas);
router.get('/areas/all-names', AreaController.getAllAreaNames);
router.get('/areas/:id', AreaController.getAreaById);
router.get('/areas/name/:name', AreaController.getAreaByName);
router.post('/areas', AreaController.createArea);
router.put('/areas/:id', AreaController.updateAreaById);
router.delete('/areas/:id', AreaController.deleteAreaById);

// Rutas para las operaciones CRUD de Llamada
router.get("/llamadas", LlamadaController.getAllLlamadas);
router.get("/llamadas/:id", LlamadaController.getLlamadaById);
router.post("/llamadas", LlamadaController.createLlamada);
router.put("/llamadas/:id", LlamadaController.updateLlamadaById);
router.delete("/llamadas/:id", LlamadaController.deleteLlamadaById);

// Ruta para llamadas desde el boton
router.post("/boton", BotonController.createLlamadaBoton)
router.get('/areas/all-names', AreaController.getAllAreaNames);

export default router;
