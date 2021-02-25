const express = require('express')
const bodyParser = require("body-parser");
const session = require('express-session');
const groupRouter = require('./routers');
const handdleError = require('./utils/middleware/handdleError')
const  notFoundHandler = require('./utils/middleware/notFound')
const router = express.Router();
const app = express()

app.use(session({secret:'hola',resave:false,saveUninitialized:false}))
app.set('trust proxy', true);
app.use(bodyParser.json())
app.use('/api',router)

//middlewares
app.use(notFoundHandler)
app.use(handdleError)

groupRouter(router)
module.exports = app;
