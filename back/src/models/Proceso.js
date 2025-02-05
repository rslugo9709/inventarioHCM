const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Proceso', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
      ,
      fechaInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }, 
      estado: {
        type: DataTypes.ENUM('Cotizacion', 'Orden de compra', 'Factura', 'Remision', 'Finalizado'),
        allowNull: false,
        defaultValue: 'Cotizacion'
      },
      creadoDesde: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      

    },{ timestamps: false });
  };


