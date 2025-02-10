const { Router } = require('express');

const router = Router();


//Importamos los gets

const {getClientes} = require("../controllers/gets/getAll/getClientes");



//Importamos los posts 
const { postCliente } = require('../controllers/posts/postCliente');

//Importamos los deletes 
const { deleteClientById } = require('../controllers/deletes/deleteCliente');
const { deleteCotizacionById } = require('../controllers/deletes/deleteCotizacion');
const { deleteEmpleadoById } = require('../controllers/deletes/deleteEmpleado');
const { deleteFacturaById } = require('../controllers/deletes/deleteFactura');
const { deleteOrdenCompraById } = require('../controllers/deletes/deleteOrdenCompra');
const { deleteProcesoById } = require('../controllers/deletes/deleteProceso');
const { deleteProductoById } = require('../controllers/deletes/deleteProducto');
const { deleteRemisionById } = require('../controllers/deletes/deleteRemision');

//Importamos los updates




//Rutas get

router.get("/clientes/", getClientes);

//Rutas posts 
router.post("/crearcliente/", postCliente);

//Rutas delete

router.delete("/eliminarCliente/", deleteClientById);
router.delete("/eliminarCotizacion/", deleteCotizacionById);
router.delete("/eliminarEmpleado/", deleteEmpleadoById);
router.delete("/eliminarFactura/", deleteFacturaById);
router.delete("/eliminarOrdenCompra/", deleteOrdenCompraById);
router.delete("/eliminarProceso/", deleteProcesoById);
router.delete("/eliminarProducto/", deleteProductoById);
router.delete("/eliminarRemision/", deleteRemisionById);

module.exports = router;