const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const morgan = require('morgan');
const expressJWT = require('express-jwt');

const app        = express();
const port       = process.env.PORT || 8000;
const router     = require("./config/routes");

mongoose.connect('mongodb://localhost/project2');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use("/", router);

app.listen(port, () => console.log(`Express started on port: ${port}`));
