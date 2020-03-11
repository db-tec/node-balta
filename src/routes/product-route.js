'use strict';

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const models = require('../models/product');
const controller = require('../controllers/product-controller');



router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;