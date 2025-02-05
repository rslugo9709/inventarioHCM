const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Cliente', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      }
      ,
      nombre: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },      
      aldia:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      tipo: {
        type: DataTypes.ENUM('Persona', 'Empresa'),
        allowNull: false,
        defaultValue: 'Empresa'
      },
      correo:{
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