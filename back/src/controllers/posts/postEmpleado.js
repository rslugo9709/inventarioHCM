const axios = require("axios");
const {Empleado, Proceso} = require("../../db");

async function postEmpleado(req, res){


    try{
    const { nombre, tipo, correo } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric'
      });
    let objeto = {
        nombre: nombre,
        tipo: tipo,
        correo: correo,
        activoDesde: formattedDate,
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if(!nombre || !correo ){
        return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.nombre)
    if(existencia){
        console.log("se procede a crear el producto")
        const empleado = await Empleado.findOrCreate({
            where: objeto
        })
        console.log(empleado)
        let empleadoI = await Empleado.findAll({     
            where:{
                nombre: nombre
            },
        })
        return res.status(200).json({message:"Empleado creado exitosamente", empleadoI})
    }else{
        return res.status(400).json({message: "El empleado ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(nombre){
    //busco por el nombre en la base de datos
    let exists = await Empleado.findOne({
        where:{
           nombre: nombre
        }
    })
    if(exists){
        console.log("el Empleado existe y no será creado")
        return false;
    }else{
        console.log("el Empleado será creado")
        return true;
    }
    
} 

module.exports = {postEmpleado};