const { DataTypes } = require("sequelize");

//La factura es una opcion opcional, recuerda que depende de cada empresa, asi que estará en el mismo nivel que la remision
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Factura', {
      
      procesoId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: { model: "Proceso", key: "id" }
      },
      //Identificador unico externo generado por el world office
      nFactura: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
        
      }
      ,
      fechaFactura: {
        type: DataTypes.DATEONLY,
        allowNull: false

      },
      fechaVencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      subTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      totalDescuento: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      totalOperacion: {
        type: DataTypes.DOUBLE, 
        allowNull: false
      },
      totalMenosRetenciones: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
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
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      
      
    },{ timestamps: false});
  };