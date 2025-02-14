const axios = require("axios");
const {Proceso, Cliente, Empleado} = require("../../db");

async function postProceso(req, res){


    try{
    const {fechaInicio, estado, cliente, empleado } = req.body;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric'
      });
    let objeto = {
        fechaInicio: fechaInicio,
        estado: estado,
        activoDesde: formattedDate
    }
    console.log("recibe la info")
    console.log(objeto);
    //si falta algun dato se rechaza
    if( !estado || !fechaInicio){
        return res.status(401).send("Missing info");
    }
    
        console.log("se procede a crear el producto")
        const proceso = await Proceso.findOrCreate({
            where: objeto
        })
        if(cliente){
            const clientesEncontrados = await Cliente.findAll({
                where: { id: cliente },
              });
            await proceso.setClientes(clientesEncontrados);
        }

        if(empleado){
            const empleadosEncontrados = await Empleado.findAll({
                where: { id: empleado },
            });
            await proceso.setEmpleados(empleadosEncontrados);
        }

        console.log(proceso)


        //status 201 indica que el archivo fue creado
        return res.status(201).json({message:"Proceso creado exitosamente"})

    }catch(error){
        console.log("error aqui")
        return res.status(500).json({message: error.message})
    }
}



module.exports = {postProceso};
