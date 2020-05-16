const express = require("express");
const router = express.Router();
const productMocks = require('../utils/mocks/products');//La bd 

router.get("/", function (req, res) {
    res.render("products", {productMocks});// la data donde estan los producto la BD 
});

module.exports = router;