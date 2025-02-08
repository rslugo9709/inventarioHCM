const axios = require("axios");
const { Op } = require('sequelize');

const {Remision} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteRemisionById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const remision = await Remision.findByPk(id)
        
        if (!remision) {
            
            return res.status(404).json({ message: error.message });
        }
        await remision.update({ borrado });


        return res.status(200).json({message: "Remision borrado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteRemisionById};