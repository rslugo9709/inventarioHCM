const axios = require("axios");
const { Op } = require('sequelize');

const {Factura, OrdenCompra, Remision, Cotizacion, Proceso} = require("../../../db");

async function getProcesoById(req, res){

    const {id} = req.query; 

    try {
        const resultado = await Proceso.findByPk({
            where: {
                id: id,
                borrado: false // Trae solamente a los clientes que no han sido borrados
              },
            include: [
                {
                    model: Cotizacion,
                    attributes: ["idCotizacion", "vigencia", "nota", "creadoDesde"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos
                },
                {
                    model: OrdenCompra,
                    attributes: ["ordenExternaId", "direccionEntrega", "tiempoEstimado", "vigencia", "ciudad", "nota", "procesado"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos
                },
                {
                    model: Factura,
                    attributes: ["nFactura","fechaFactura", "fechaVencimiento", "subTotal", "totalDescuento", "totalOperacion", "totalMenosRetenciones", "vigencia", "ciudad", "nota", "creadoDesde"],
                    where: {borrado : false},//Trae a los procesos que no esten borrados
                    required: false // Esto es para poder traer a los clientes que aun no tengan procesos

                },
                {
                    model: Remision,
                    attributes: ["nRemision", "fechaDocumento", "fechaVencimiento", "fechaRecibido", "subTotal", "totalDescuento", "total", "iva", "reteiva", "formaPago", "infoPago", "cuotas", "valorPagado", "valorRestante", "fechasPagadas", "direccion", "ciudad", "nota"],
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


module.exports = {getProcesoById};