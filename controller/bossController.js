const bossModel = require('../model/bossModel');

exports.findAll = (req, res, next) => {
  bossModel.getAllBosses(res);

};

exports.findByName = (req, res, next) => {
    let bossName = req.params.name
    bossModel.getBossByName(res,bossName)
};