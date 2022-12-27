const express = require('express');
const router = express.Router();

const basic = require('./controllers/Controller.js');

router.get('/', basic.home);
router.get('/second', basic.second);

module.exports = router;