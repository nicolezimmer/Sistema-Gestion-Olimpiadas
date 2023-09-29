//un modelo es una abstraccion que representa una tabla en la base de datos, no necesitan tener el mismo nombre de la tabla se suele poner el mismo en singular (usuarios=>usuario)

//importar conexion a la base de datos
import db from "../database/db.js"
//importar sequelize 
import { DataTypes } from "sequelize"
//definir modelos (abstraccion de las tablas)
const AreaModel = db.define('areas', {
    name: { type: DataTypes.STRING},
    description: { type: DataTypes.STRING},
}, {
    timestamps: false
  })

export default AreaModel





















