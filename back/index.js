const server = require('./src/app.js');
const { conn } = require('./src/db.js');



const port = process.env.PORT || 3000;

conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log('Server listening at 3001'); // eslint-disable-line no-console
  });
});



//cambiar el puerto por este codigo, verificar en chatgpt que puerto se puede asignar por seguridad

/*
server.listen(port, () => {
    console.log('%s listening at ${port}'); // eslint-disable-line no-console
});

*/
