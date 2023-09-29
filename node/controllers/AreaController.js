// Importar modelo
import AreaModel from "../models/AreaModel.js";

// Mostrar todas las áreas
export const getAllAreas = async (req, res) => {
    try {
        // .findAll() trae todos los registros del modelo
        const areas = await AreaModel.findAll();
        res.json(areas);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar un área por ID
export const getAreaById = async (req, res) => {
    try {
        // .findByPk() busca un registro por su ID
        const area = await AreaModel.findByPk(req.params.id);
        if (!area) {
            return res.status(404).json({ message: "Área no encontrada" });
        }
        res.json(area);
    } catch (error) {
        res.json({ message: error.message });
    }
}
// Mostrar un área por ID
export const getAreaByName = async (req, res) => {
    try {
        const area = await AreaModel.findOne({
            where: { name: req.params.name }
        });
        if (!area) {
            return res.status(404).json({ message: "Área no encontrada" });
        }
        res.json(area);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Crear una nueva área
export const createArea = async (req, res) => {
    try {
        // .create crea un nuevo registro con los datos proporcionados en el cuerpo de la solicitud
        await AreaModel.create(req.body);
        res.json({ message: "Área creada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar un área por ID
export const updateAreaById = async (req, res) => {
    try {
        const { id } = req.params;
        // .update actualiza el registro con los datos proporcionados en el cuerpo de la solicitud
        const [updatedRows] = await AreaModel.update(req.body, {
            where: { id },
        });
        if (updatedRows === 0) {
            return res.status(404).json({ message: "Área no encontrada" });
        }
        res.json({ message: "Área actualizada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar un área por ID
export const deleteAreaById = async (req, res) => {
    try {
        const { id } = req.params;
        // .destroy borra el registro por su ID
        const deletedRows = await AreaModel.destroy({
            where: { id },
        });
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Área no encontrada" });
        }
        res.json({ message: "Área borrada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
