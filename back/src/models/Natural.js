const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Natural', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
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