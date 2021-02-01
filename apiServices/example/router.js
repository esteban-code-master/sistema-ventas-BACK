const express = require('express');
const router = express.Router();
const {Sequelizelib} = require('../../lib/sequelize')

router.get('/example', function(req, res, next) {
  const seq = new  Sequelizelib()
  seq.connection()
    res.end("ejemplo de una ruta")
});

module.exports = router;
