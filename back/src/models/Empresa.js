const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Empresa', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
      ,
      nit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
      ,
      nombreRepresentante: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      }, 
      telefono: {
        type: DataTypes.INTEGER,
        dirreccion: DataTypes.STRING,
        allowNull: true

      },
      correo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },{ timestamps: false });
  };