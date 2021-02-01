const express = require('express');
const router = express.Router();

const example = require('../apiServices/example/router')

router.use('/group',example)

module.exports = router;
