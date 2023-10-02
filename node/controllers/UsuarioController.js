// Importar modelo
import UsuarioModel from "../models/UsuarioModel.js";

// Lógica de inicio de sesión
export const login = async (req, res) => {
    const { username, passwd } = req.body;
  
    try {
      // Busca al usuario por nombre de usuario y contraseña
      const user = await UsuarioModel.findOne({ where: { username, passwd } });
  
      if (user) {
        // Usuario autenticado con éxito
        console.log("Usuario autenticado")
        res.json({ success: true, user });
      } else {
        // Credenciales incorrectas
        res.json({ success: false, message: 'Credenciales incorrectas.' });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ success: false, message: 'Error al iniciar sesión. Inténtalo de nuevo más tarde.' });
    }
};

// Mostrar todos los usuarios
export const getAllUsuarios = async (req, res) => {
    try {
        // .findAll() trae todos los registros del modelo
        const usuarios = await UsuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar un usuario por ID
export const getUsuarioById = async (req, res) => {
    try {
        // .findByPk() busca un registro por su ID
        const usuario = await UsuarioModel.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(usuario);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
    try {
        // .create crea un nuevo registro con los datos proporcionados en el cuerpo de la solicitud
        await UsuarioModel.create(req.body);
        res.json({ message: "Usuario creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar un usuario por ID
export const updateUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        // .update actualiza el registro con los datos proporcionados en el cuerpo de la solicitud
        const [updatedRows] = await UsuarioModel.update(req.body, {
            where: { id },
        });
        if (updatedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar un usuario por ID
export const deleteUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        // .destroy borra el registro por su ID
        const deletedRows = await UsuarioModel.destroy({
            where: { id },
        });
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario borrado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}
