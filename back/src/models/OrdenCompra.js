module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('OrdenCompra', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      //variable autoincremental que guarda las iniciales del vendedor junto con el consecutivo de su cotizacion
      ordenExternaId: {
        type: DataTypes.STRING,
        allowNull: false
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
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      
      
    },{ timestamps: false });
  };