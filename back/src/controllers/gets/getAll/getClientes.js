const axios = require("axios");
const { Op } = require('sequelize');

const {Cliente, Proceso} = require("../../../db");

async function getClients(req, res){



    try {
        const clientes = await Cliente.findAll({
            where: {
                borrado: false // Trae solamente a los clientes que no han sido borrados
              },
            include: [
                {
                    model: Proceso,
                    attributes: ["id", "fecha inicio", "estado"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos

                },
                {
                    model: Producto,
                    attributes: ["id", "codigo", "nombre", "tipo"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos
                }
            ],
        })

        return res.status(200).json(clientes)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getClients};