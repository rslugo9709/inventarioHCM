const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('OrdenCompra', {
      procesoId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: { model: "Proceso", key: "id" }
      },
      //variable autoincremental que guarda las iniciales del vendedor junto con el consecutivo de su cotizacion
      ordenExternaId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccionEntrega:{
        type: DataTypes.STRING     
      },
      tiempoEstimado: {
        type: DataTypes.SMALLINT,
        defaultValue: 5
      }
      ,
      vigencia: {
        type: DataTypes.SMALLINT,
        defaultValue: DataTypes.SMALLINT,
        allowNull: false,
      }, 
      ciudad: {
        type: DataTypes.STRING, 
        allowNull: true
      }, 
      nota: {
        type: DataTypes.STRING,
        allowNull: true
      }
      ,
      creadoDesde: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      procesado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      ,
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      
      
    },{ timestamps: false });
  };