const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db')
const router = require('./network/routes')

// body parser nos permite trabajar con el cuerpo de la peticion
let app = express();
app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'))

app.listen(3000);
console.log("Puerto 3000 andando");
