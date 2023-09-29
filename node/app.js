import  express from 'express'
import cors from 'cors'
// conexion a la db
import db from './database/db.js'
// enrutador
import framRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', framRoutes)

try{
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos!!!!')
}catch (error) {
    console.log(`Salio mal la conexion a la base de datos lpm!! ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Hola fram!')

})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})