//un modelo es una abstraccion que representa una tabla en la base de datos, no necesitan tener el mismo nombre de la tabla se suele poner el mismo en singular (usuarios=>usuario)

//importar conexion a la base de datos
import db from "../database/db.js"
//importar sequelize 
import { DataTypes } from "sequelize"
//definir modelos (abstraccion de las tablas)
const PacienteModel = db.define('pacients', {
    name: { type: DataTypes.STRING},
    surname: { type: DataTypes.STRING},
    DNI: { type: DataTypes.STRING},
    birth_date: { type: DataTypes.STRING},
    gender: { type: DataTypes.STRING},
    direction: { type: DataTypes.STRING},
    health_insurance: { type: DataTypes.STRING},
    nurse: { type: DataTypes.STRING},
    id_areas: { type: DataTypes.STRING}

}, {
    timestamps: false
  })

export default PacienteModel




















