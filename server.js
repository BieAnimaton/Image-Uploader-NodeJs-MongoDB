const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const imagemModelo = require('./src/modelos/galeria');

// Conectando ao DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log('Conectado ao DB');
});

// Configurando app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando "ejs" como "motor" de visualização
app.set("view engine", "ejs");

// Rotas
app.use('/imagens', require('./src/rotas'));

// Iniciando app
app.listen(process.env.PORT || '3000', err => {
    if (err)
        throw err
    console.log('Servidor iniciado');
});