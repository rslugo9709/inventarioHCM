const axios = require("axios");
const {Cliente, Producto} = require("../../db");

async function postProducto(req, res){


    try{
    const {codigo, nombre, tipo, descripcion, cantidad, unidadMedida, precios, marca } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric'
      });
    let objeto = {
        codigo: codigo, 
        nombre: nombre, 
        tipo: tipo, 
        descripcion: descripcion, 
        cantidad: cantidad, 
        unidadMedida: unidadMedida, 
        precios: precios, 
        marca: marca,
        activoDesde: formattedDate
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if( !codigo || !nombre || !marca || !tipo || !descripcion || !cantidad || !unidadMedida){
        return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.nombre)
    if(existencia){
        console.log("se procede a crear el producto")
        const producto = await Producto.findOrCreate({
            where: objeto
        })
        console.log(producto)
        let productoI = await Producto.findAll({     
            where:{
                nombre: nombre
            },
        })
        return res.status(200).json({message:"producto creado exitosamente", productoI})
    }else{
        return res.status(400).json({message: "El producto ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(nombre){
    //busco por el nombre en la base de datos
    let exists = await Producto.findOne({
        where:{
           nombre: nombre
        }
    })
    if(exists){
        console.log("el producto existe y no será creado")
        return false;
    }else{
        console.log("Producto será creado")
        return true;
    }
    
} 

module.exports = {postProducto};