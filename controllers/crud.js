import conexion from "../database/connection.js";

export const guardar = async (req, res)=>{
    //el id es autoincremental no editable (pero lo conte como campo)
    const nombre_alumno = req.body.nombre;
    const apellido_alumno = req.body.apellido;
    const correo_alumno = req.body.correo;
    const telefono = req.body.telefono;
    console.log(nombre_alumno, apellido_alumno, correo_alumno, telefono);
    
    // const{nombre_alumno, apellido_alumno, correo_alumno, telefono } =req.body
    // //construir la data que sera insertada
    // const data ={
    //     nombre_alumno: nombre_alumno,
    //     apellido_alumno: apellido_alumno,
    //     correo_alumno: correo_alumno,
    //     telefono: telefono
    // }
    conexion.query('INSERT INTO alumno SET ?', {nombre_alumno:nombre_alumno, apellido_alumno:apellido_alumno, correo_alumno:correo_alumno, telefono:telefono}, (err, result) => {
        if (err){
            console.log('Ocurrio un error, no se puede insertar alumno')
        }else{
        res.redirect('/')
    }
    })
}

export const actualizar = async (req, res) =>{
    const id = req.body.id;
    const nombre_alumno = req.body.nombre;
    const apellido_alumno = req.body.apellido;
    const correo_alumno = req.body.correo;
    const telefono = req.body.telefono;
    conexion.query('UPDATE alumno SET ? WHERE id = ?', [{nombre_alumno:nombre_alumno, apellido_alumno:apellido_alumno, correo_alumno:correo_alumno, telefono:telefono}, id], (err, result)=>{
        if (err){
            console.log('Ocurrio un error, no se puede actualizar alumno')
        }else{
        res.redirect('/')
    }  
    })
}

//----------------------------------------------------------------------
//CARRERAS
export const guardar_carrera = async (req, res)=>{
    //el id es autoincremental no editable (pero lo conte como campo)
    const nombre_carrera = req.body.carrera;
    const universidad = req.body.universidad;
    console.log(nombre_carrera, universidad);

    conexion.query('INSERT INTO carrera SET ?', {carrera:nombre_carrera, universidad:universidad}, (err, result) => {
        if (err){
            console.log('Ocurrio un error, no se puede insertar carrera')
        }else{
        res.redirect('/')
    }
    })
}
export const actualizar_carrera = async (req, res)=>{
    //el id es autoincremental no editable (pero lo conte como campo)
    const id = req.body.id;
    const nombre_carrera = req.body.carrera;
    const universidad = req.body.universidad;
    console.log(nombre_carrera, universidad);

    conexion.query('UPDATE carrera SET ? WHERE id = ?', [{carrera:nombre_carrera, universidad:universidad}, id], (err, result) => {
        if (err){
            console.log('Ocurrio un error, no se puede insertar carrera')
        }else{
        res.redirect('/index_carreras')
    }
    })
}