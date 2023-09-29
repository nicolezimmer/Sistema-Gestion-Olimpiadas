// Importar modelo
import LlamadaModel from "../models/LlamadaModel.js";

// Mostrar todas las llamadas
export const getAllLlamadas = async (req, res) => {
    try {
        const llamadas = await LlamadaModel.findAll();
        res.json(llamadas);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar una llamada por ID
export const getLlamadaById = async (req, res) => {
    try {
        const llamada = await LlamadaModel.findByPk(req.params.id);
        if (!llamada) {
            return res.status(404).json({ message: "Llamada no encontrada" });
        }
        res.json(llamada);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Crear una nueva llamada
export const createLlamada = async (req, res) => {
    try {
        await LlamadaModel.create(req.body);
        res.json({ message: "Llamada creada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar una llamada por ID
export const updateLlamadaById = async (req, res) => {
    try {
        const { id } = req.params;
        const [updatedRows] = await LlamadaModel.update(req.body, {
            where: { id },
        });
        if (updatedRows === 0) {
            return res.status(404).json({ message: "Llamada no encontrada" });
        }
        res.json({ message: "Llamada actualizada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar una llamada por ID
export const deleteLlamadaById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await LlamadaModel.destroy({
            where: { id },
        });
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Llamada no encontrada" });
        }
        res.json({ message: "Llamada borrada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
