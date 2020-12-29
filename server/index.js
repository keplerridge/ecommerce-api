const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const products = require('./products.json')

const app = express();

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(3800, () => console.log('Test Message'))