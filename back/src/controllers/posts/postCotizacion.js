const axios = require("axios");
const {Cotizacion, Producto, Proceso} = require("../../db");

async function postCotizacion(req, res){


    try{
    const {procesoId, idCotizacion, vigencia, ciudad, nota, productos  } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric'
      });
    let objeto = {
        procesoId: procesoId, 
        idCotizacion: idCotizacion, 
        vigencia: vigencia, 
        ciudad: ciudad, 
        nota: nota, 
        productos: productos, 
        activoDesde: formattedDate,
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if( !procesoId || !idCotizacion || !vigencia || !ciudad || !nota || !productos ){
      return res.status(401).send("Missing info");
    }
    console.log("se verifica que no falte nada")
    let existencia = await revisionExistencia(objeto.idCotizacion)
    if(existencia){
        console.log("se procede a crear el producto")
        const resultado = await Cotizacion.findOrCreate({
            where: objeto
        })
        console.log(resultado)
        let resultadoI = await Cotizacion.findAll({     
            where:{
                idCotizacion: idCotizacion
            },
        })
        return res.status(200).json({message:"Cotizacion creada exitosamente", resultadoI})
    }else{
        return res.status(400).json({message: "La cotizacion ya existe!"})
    }


    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}

async function revisionExistencia(idCotizacion){
    //busco por el nombre en la base de datos
    let exists = await Cotizacion.findOne({
        where:{
            idCotizacion: idCotizacion
        }
    })
    if(exists){
        console.log("el registro existe y no será creado")
        return false;
    }else{
        console.log("El registro será creado")
        return true;
    }
    
} 

module.exports = {postCotizacion};