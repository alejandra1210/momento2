const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products'); //donde estan los products la data

router.get('/', function (req, res) {
    const {query} = req.query;

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

router.get('/:productId', function (req, res) {
    const {productId} = req.params;

    const product = productMocks.filter(p => p.id == productId);

    res.status(200).json({
        data: product,
        message: 'product retrieved'
    });
});

router.post('/', function (req, res) {
    const product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
    };

    productMocks.push(product);

    res.status(201).json({
        data: product,
        message: 'product created'
    });
});

router.put('/:productId', function (req, res) {
    const {productId} = req.params;

    const productWithNewData = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
    };

    let productIndex = productMocks.findIndex(p => p.id == productId); //para que nos lleve el mismo id y no se borre cuando actualiza 
    let currentProduct = productMocks[productIndex];
    productMocks[productIndex] = Object.assign(currentProduct, productWithNewData);

    res.status(200).json({
        data: productMocks[productIndex],
        message: 'product updated'
    });
});

router.delete('/:productId', function (req, res) {
    const {productId} = req.params;

    let productIndex = productMocks.findIndex(p => p.id == productId);
    productMocks.splice(productIndex, 1);

    res.status(200).json({
        data: productMocks,
        message: 'product deleted'
    });
});


module.exports = router;
