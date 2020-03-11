'use strict';
const express = require('express');
const bodyParser = require('body-parser');

// Carrega as Rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');


const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', index);
app.use('/products', product);

module.exports = app;