import express from 'express'
import conexion from '../database/connection.js'
import {actualizar, actualizar_carrera, guardar, guardar_carrera} from '../controllers/crud.js'
const router = express.Router()


//rutas para las vistas alumno

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM alumno', (error, results) =>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
})

//ruta para crear registros alumnos
router.get('/crear', (req, res)=>{
   res.render('crear');
})
//ruta para guardar registros alumnos
router.get('/guardar', (req, res)=>{
   res.render('guardar')
})

//ruta para editar registros
router.get('/editar/:id', (req, res)=>{
   const id = req.params.id;
   conexion.query('SELECT * FROM alumno WHERE id=?', [id], (error, results)=>{
      if(error){
         throw error;
     }else{
         res.render('editar', {alumno:results[0]});
     }
   })
})


//rutas para los controllers
router.post('/guardar', guardar);
router.post('/actualizar', actualizar);

//ruta para eliminar el registro
router.get('/eliminar/:id', (req, res)=>{
   const id = req.params.id;
   conexion.query('DELETE FROM alumno WHERE id=?', [id], (error, results)=>{
      if(error){
         throw error;
     }else{
         res.redirect('/');
     }
   })
});
//-------------------------------------------------------------------------------------
//CARRERAS

//ruta para crear carreras
router.get('/index_carreras', (req, res)=>{
    conexion.query('SELECT * FROM carrera', (error, results) =>{
        if(error){
            throw error;
        }else{
            res.render('index_carreras', {results:results});
        }
    })
 })


//rutas para las vistas de carreras
// router.get('/index', (req, res) => {
//     conexion.query('SELECT * FROM carrera', (error, results) =>{
//         if(error){
//             throw error;
//         }else{
//             res.render('index_carreras', {results:results});
//         }
//     })
//  })
//ruta para editar registros
router.get('/editar_carrera/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM carrera WHERE id=?', [id], (error, results)=>{
       if(error){
          throw error;
      }else{
          res.render('editar_carrera', {carrera:results[0]});
      }
    })
 })
//ruta para crear registros carreras
router.get('/crear_carrera', (req, res)=>{
    res.render('crear_carrera');
 })
 //ruta para guardar registros carreras
router.get('/guardar_carrera', (req, res)=>{
    res.render('guardar_carrera')
 })
 //rutas para los controllers
router.post('/guardar_carrera', guardar_carrera);
router.post('/actualizar_carrera', actualizar_carrera);

//ruta para eliminar el registro carreras
router.get('/eliminar_carrera/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM carrera WHERE id=?', [id], (error, results)=>{
       if(error){
          throw error;
      }else{
          res.redirect('/index_carreras');
      }
    })
 });

export default router