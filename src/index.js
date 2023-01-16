const express = require('express');
const app = express();
const morgan = require('morgan');
// configuraciones
app.set('port',3000)
// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});