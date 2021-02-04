const express = require('express')
const bodyParser = require("body-parser");
const groupRouter = require('./routes');
const router = express.Router();
const app = express()

app.use(bodyParser.json())
app.use('/api',router)
groupRouter(router)

module.exports = app;
