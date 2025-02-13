const axios = require("axios");
const { Op } = require('sequelize');

const {Producto, Proceso} = require("../../db");

async function getProductoByName(req, res){


    const {nombre} = req.query;
    const fNombre= nombre.toLowerCase()

    try {
        const respuesta = await Producto.findAll({
            where: {
                nombre:{
                    [Op.iLike]: `%${fNombre}%`
                }
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
            limit: 15
        })

        return res.status(200).json(respuesta)
    } catch (error) {
        
        res.status(500).json({message: error.message})

    }

}


module.exports = {getProductoByName};