//  Nos permite configurar las variables de entorno

import './loadEnv.js'
import express, {json} from 'express'
import router from './routers/routers.js'

//Puerto donde se escucha express
const PORT = 11000
//Aplicacion express
const app = express()

//sistema de vistas
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));
//console.log(process.env.DB_USERNAME)


//ubicacion de archivos
app.use(express.static('public'))

//routers
app.use('/', router)


//servidor escuchando en el puerto
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})