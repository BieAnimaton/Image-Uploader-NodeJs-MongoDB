const express = require('express');
const rotas = express.Router();
const fs = require('fs');
const path = require('path');

// Configuração Multer
const multerConf = require('./config/multer');

const imagemModelo = require('./modelos/galeria');

// Recebendo imagem
rotas.get("/",  (req, res) => {
    imagemModelo.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('app', { items: items });
        }
    });
});

// Enviando imagem
rotas.post("/",  multerConf.single('image'), (req, res, next) => {
    
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imagemModelo.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // salvar.item();
            res.redirect('/imagens');
        }
    });
});

module.exports = rotas;