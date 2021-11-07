import mysql from 'mysql2'

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

conexion.connect(err => {
    if (err) {
        console.log(`${err}`)
        return
    }

    console.log(`Connected to database ${process.env.DB_DATABASE}`)
})

export default conexion