const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Empresa', {
      //Dado que es una relacion de herencia, se coloca el id de la tabla clientes como llave foranea. 
      clienteId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: { model: "Cliente", key: "id" }
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