const express = require("express");
const path = require("path");
const app = express();
//instalar el body 
const bodyParser = require('body-parser');
//las rutas 
const productsRouter = require('./routes/products');// para mostrar todos los productos 
const productsApiRouter = require('./routes/api/products');

//usando el body para el post
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Define routes para hacer funcionar el proyecto
app.use("/", productsRouter);

app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);

const server = app.listen(8000, function () {
    console.log(`Listening http://localhost:${server.address().port}`);
});
