const axios = require("axios");
const { Op } = require('sequelize');

const {OrdenCompra, Proceso} = require("../../../db");

async function getOrdenById(req, res){

    const {id} = req.query; 
    
    try {
        const resultado = await OrdenCompra.findAll({
            where: {
                ordenExternaId: id,
                borrado: false // Trae solamente a los clientes que no han sido borrados
              },
            include: [
                {
                    model: Proceso,
                    attributes: ["id"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos

                }
            ],
        })

        return res.status(200).json(resultado)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getOrdenById};