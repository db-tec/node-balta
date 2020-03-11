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
mongoose.connect('Connection String');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', index);
app.use('/products', product);

module.exports = app;
