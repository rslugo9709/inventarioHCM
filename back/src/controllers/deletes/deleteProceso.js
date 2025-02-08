const axios = require("axios");
const { Op } = require('sequelize');

const {Proceso} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteProcesoById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const proceso = await Proceso.findByPk(id)
        
        if (!proceso) {
            
            return res.status(404).json({ message: error.message });
        }
        await proceso.update({ borrado });


        return res.status(200).json({message: "Proceso borrado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteProcesoById};