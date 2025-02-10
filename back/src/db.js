require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const {DB_USER, DB_PASSWORD, DB_HOST, DBPORT, BDD} = process.env;
/*
try {
    console.log(DB_USER);
} catch (error) {
    console.log("not reading")
}
*/
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DBPORT}/${BDD}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

//Verificar que la conexion se ha establecido correctamente 
const verificarBase = async() =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

verificarBase();


const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Admin, Cliente, Cotizacion, Empleado, Empresa, Factura, Natural, OrdenCompra, Proceso, Producto, Remision } = sequelize.models;



// Se definen las relaciones
try {
    //relacion productos con clientes
    Producto.belongsToMany(Cliente, {through: "producto_cliente",timestamps: false });
    Cliente.belongsToMany(Producto, {through: "producto_cliente",timestamps: false});
    //relacion vendedores procesos
    Empleado.belongsToMany(Proceso, {through: "proceso_empleado",timestamps: false });
    Proceso.belongsToMany(Empleado, {through: "proceso_empleado",timestamps: false });
    //relacion clientes procesos
    Cliente.belongsToMany(Proceso, {through: "proceso_cliente",timestamps: false });
    Proceso.belongsToMany(Cliente, {through: "proceso_cliente",timestamps: false });
    //Ponemos las relaciones de herencia de clientes
    Natural.belongsTo(Cliente, {foreignKey: 'clienteId',as: 'cliente'});
    Cliente.hasOne(Natural, {foreignKey: 'clienteId',as: 'cliente'})
    Empresa.belongsTo(Cliente, {foreignKey: 'clienteId',as: 'cliente'});
    //relaciones de herencia de procesos
    Cotizacion.belongsTo(Proceso, {foreignKey: 'id',as: 'cotizaciones'});
    Factura.belongsTo(Proceso, {foreignKey: 'id',as: 'facturas'});
    OrdenCompra.belongsTo(Proceso, {foreignKey: 'id',as: 'Orden de compra'});
    Remision.belongsTo(Proceso, {foreignKey: 'id',as: 'Remisiones'});
} catch (error) {
    console.log("Modelos no listos, falta configurar");
    console.log(error);
}

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };