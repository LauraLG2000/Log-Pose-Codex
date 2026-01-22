const express = require('express');
const cors = require('cors');
const pirates = require('./route/pirates.js');

const app = express();
app.use(cors());  //para conectar el backend de local al frontend
app.use(express.json());

app.use('/', pirates);

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});

//instalar npm install cors para conectar front con back