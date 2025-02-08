const XLSX = require("xlsx");
const sequelize = require("./db");
const Producto = require("./models/Producto");

const importarExcel = async () => {
  try {
    // Conectar a la BD
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");

    // Sincronizar modelo (elimina tabla si ya existe en `force: true`)
    await sequelize.sync({ force: false });

    // Leer archivo Excel
    const workbook = XLSX.readFile("inventario.xlsx");
    const sheetName = workbook.SheetNames[0]; // Primera hoja
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Insertar datos en PostgreSQL
    for (const row of data) {
      await Producto.create({
        codigo: row["Código"],
        nombre: row["Nombre"],
        categoria: row["Categoría"],
        precio: row["Precio"],
        stock: row["Stock"],
      });
    }

    console.log("Datos importados correctamente.");
    await sequelize.close();
  } catch (error) {
    console.error("Error al importar:", error);
  }
};

importarExcel();