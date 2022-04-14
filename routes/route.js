const express = require('express');
const router = express.Router();
const bossController = require('../controller/bossController');

router.get('/', bossController.findAll);

router.get('/:name', bossController.findByName);

module.exports = router;