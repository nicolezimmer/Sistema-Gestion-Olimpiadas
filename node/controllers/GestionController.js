//importar modelo 
import GestionModel from "../models/GestionModel.js";

//metodos del crud
//CRUD es el acrónimo de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Borrar).

//mostrar todos los registros
export const getAllFram= async (req, res)=>{
    try{
        //.findAll() trae todos los registros del modelo
        const registros = await GestionModel.findAll()
        res.json(registros)
    } catch (error){
        res.json( {message: error.message})
    }

}
//mostrar un registro
export const getFram= async (req, res)=>{
    try{
        //.findAll() trae todos los registros del modelo donde se cumpla la condicion 
        const registro = await GestionModel.findAll({
            where:{
                id:req.params.id
            }
        }

        )
        res.json(registro[0])
    } catch (error){
        res.json( {message: error.message})
    }

}
//crear un registro
export const createFram= async (req, res)=>{
    try{
        //.create crea el registro que le pasemos
        await GestionModel.create(req.body)
        res.json({
            "massage": "registro creado correctamente grrr"
        })
    } catch (error){
        res.json( {message: error.message})
    }

}
//actualizar un registro 
export const updateFram= async (req, res)=>{
    try{
        //.update actualiza el registro que le indiquemos con la informacion que le pasemos 
        await GestionModel.update(req.body, {
            where:{
                id:req.params.id
            }
        })
        res.json({
            "massage": "registro actualizado correctamente grrr"
        })
    } catch (error){
        res.json( {message: error.message})
    }

}
//eliminar un registro 
export const deleteFram= async (req, res)=>{
    try{
        //.destroy borra el registro que le indiquemos 
        await GestionModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "massage": "registro borrado correctamente grrr"
        })
    } catch (error){
        res.json( {message: error.message})
    }

}