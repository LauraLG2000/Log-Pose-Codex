const express = require('express');
const pirates = require('./route/pirates.js');

const app = express();
app.use(express.json());

app.use('/', pirates);

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
