const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteClientById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const cliente = await Cliente.findByPk(id)
        
        if (!cliente) {
            
            return res.status(404).json({ message: error.message });
        }
        await cliente.update({ borrado });


        return res.status(200).json({message: "cliente borrado exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteClientById};