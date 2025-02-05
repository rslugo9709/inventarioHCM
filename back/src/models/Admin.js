const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Admin', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
      ,
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      activoDesde: {
        type: DataTypes.DATEONLY,
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