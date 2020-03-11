'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Carrega as Rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');


const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');

//Carrega os Models
const Product = require('./models/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', index);
app.use('/products', product);

module.exports = app;
