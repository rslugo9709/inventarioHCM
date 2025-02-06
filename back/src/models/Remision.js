const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Remision', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      //Identificador unico externo generado por el world office
      nRemision: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false

      }
      ,
      fechaDocumento: {
        type: DataTypes.DATEONLY,
        allowNull: false

      },
      fechaVencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      fechaRecibido: {
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
      total: {
        type: DataTypes.DOUBLE, 
        allowNull: false
      },
      iva: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      retefuente: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      reteiva: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      
      formaPago: {
        type: DataTypes.ENUM('tarjeta credito', 'tarjeta debito', 'transferencia bancaria', 'pago PSE', 'efectivo', 'otro'),
        allowNull: false
      },
      infoPago: {
        type: DataTypes.STRING

      }, 
      cuotas: {
        type: DataTypes.SMALLINT, 
      },
      valorPagado: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      valorRestante: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      fechasPagadas:{
        type: DataTypes.ARRAY(DataTypes.DATEONLY)
      }
      , 
      direccion: {
        type: DataTypes.STRING
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