const axios = require("axios");
const { Op } = require('sequelize');

const {Factura} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteFacturaById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const factura = await Factura.findByPk(id)
        
        if (!factura) {
            
            return res.status(404).json({ message: error.message });
        }
        await factura.update({ borrado });


        return res.status(200).json({message: "Factura borrada exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteFacturaById};