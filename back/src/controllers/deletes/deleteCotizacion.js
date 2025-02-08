const axios = require("axios");
const { Op } = require('sequelize');

const {Cotizacion} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteCotizacionById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const cotizacion = await Cotizacion.findByPk(id)
        
        if (!cotizacion) {
            
            return res.status(404).json({ message: error.message });
        }
        await cotizacion.update({ borrado });


        return res.status(200).json({message: "Cotizacion borrada existosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteCotizacionById};