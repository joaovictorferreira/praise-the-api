const express = require('express');
const router = express.Router();
const bossController = require('../controller/bossController');

router.get('/', bossController.findAll);

router.get('/:id', bossController.findById);

module.exports = router;