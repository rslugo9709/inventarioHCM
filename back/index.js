const server = require('./src/app.js');
//const { conn } = require('./src/db.js');


/*
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log("Servidor andando")
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

*/

//cambiar el puerto por este codigo, verificar en chatgpt que puerto se puede asignar por seguridad
/*
const port = process.env.PORT || 3000;
server.listen(3001, () => {
    console.log('%s listening at ${port}'); // eslint-disable-line no-console
});
*/


server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
});