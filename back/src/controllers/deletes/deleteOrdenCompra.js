const axios = require("axios");
const { Op } = require('sequelize');

const {OrdenCompra} = require("../../db");

//Aqui se ejecuta el borrado logico, que no destruye el registro sino que cambia 
async function deleteOrdenCompraById(req, res){


    const {id} = req.query;
    const borrado = true; 
    try {
        const oCompra = await OrdenCompra.findByPk(id)
        
        if (!oCompra) {
            
            return res.status(404).json({ message: error.message });
        }
        await oCompra.update({ borrado });


        return res.status(200).json({message: "Orden de compra borrada exitosamente"})
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {deleteOrdenCompraById};