const axios = require("axios");
const { Op } = require('sequelize');

const {Producto, Cliente, Proceso} = require("../../../db");

async function getProductos(req, res){


//Se deberia agregar que pudiese contar los productos vendidos por clientes y por procesos
    try {
        const resultados = await Producto.findAll({
            where: {
                borrado: false // Trae solamente a los clientes que no han sido borrados
              },
            include: [
                {
                    model: Proceso,
                    attributes: ["id"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos

                },
                {
                    model: Cliente,
                    attributes: ["id"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos

                }
                
            ],
        })

        return res.status(200).json(resultados)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getProductos};





