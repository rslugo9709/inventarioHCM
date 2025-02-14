const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Cotizacion', {
      
      procesoId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: { model: "Proceso", key: "id" }
      },
      //variable autoincremental que guarda las iniciales del vendedor junto con el consecutivo de su cotizacion
      idCotizacion: {
        type: DataTypes.STRING,
        allowNull: false

      }
      ,
      vigencia: {
        type: DataTypes.SMALLINT,
        defaultValue: 5,
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
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      
      
    },{ timestamps: false });
  };