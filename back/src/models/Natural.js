const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Natural', {
      //Dado que es una relacion de herencia, se coloca el id de la tabla clientes como llave foranea.
      clienteId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: { model: "Cliente", key: "id" }
      }
      ,
      tipoId: {
        type: DataTypes.ENUM('Cedula ciudadania', 'Cedula extranjeria', 'Pasaporte', 'Otro'),
        unique: false,
        allowNull: false,
      }, 
      numeroId:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dirreccion:{
        type: DataTypes.STRING,
        allowNull: true
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  
    },{ timestamps: false });
  };