const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Producto', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      codigo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
      ,
      nombre: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      }, 
      tipo: {
        type: DataTypes.ENUM('HERRAMIENTAS DE CORTE', 'ACCESORIOS Y MAQUINAS', 'HERRAMIENTAS DE PRECISION Y MEDICION', 'ABRASIVOS', 'CEPILLOS INDUSTRIALES', 'HERRAMIENTAS ELECTRICAS Y NEUMATICAS', 'HERRAMIENTAS MANUALES', 'PRODUCTOS QUIMICOS', 'FERRETERIA GENERAL' ),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      unidadMedida: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      precios: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        allowNull: true
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activoDesde: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      estado:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      }, 
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  
  
    },{ timestamps: false });
  };