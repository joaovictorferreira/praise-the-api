const express = require('express');
const router = express.Router();
const bossController = require('../controller/bossController');

router.get('/', bossController.findAll);

router.get('/:name', bossController.findByName);

router.get('/drops/:name', bossController.findWeapons);

module.exports = router;