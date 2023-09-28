// import { Sequelize } from "sequelize";

// // conexion con la base de datos
// const db = new Sequelize('codigo_azul', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// } )
// // MYSQL_URL= mysql://root:sc6IifdQ8D2riPihXkGp@containers-us-west-46.railway.app:6573/railway
// // MYSQLDATABASE=railway
// // MYSQLHOST=containers-us-west-46.railway.app
// // MYSQLPASSWORD=sc6IifdQ8D2riPihXkGp
// // MYSQLPORT=6573
// // MYSQLUSER=root

// export default db


import { Sequelize } from "sequelize";

// Credenciales de la base de datos
const MYSQL_URL = "mysql://root:sc6IifdQ8D2riPihXkGp@containers-us-west-46.railway.app:6573/railway";

// Crear la instancia de Sequelize utilizando las credenciales directamente
const db = new Sequelize(MYSQL_URL, {
  dialect: 'mysql',
  define: {
    timestamps: false // Opcional: para deshabilitar la generación automática de campos de timestamp
  }
});

export default db;
