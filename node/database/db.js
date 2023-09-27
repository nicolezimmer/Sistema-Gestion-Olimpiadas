import { Sequelize } from "sequelize";

// conexion con la base de datos
const db = new Sequelize('codigo_azul', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
} )


export default db