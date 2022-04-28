const bossModel = require('../model/bossModel');

exports.findAll = (req, res, next) => {
  bossModel.getAllBosses(res);

};

exports.findByName = (req, res, next) => {
  let bossId = req.params.name
  bossModel.getBossByName(res,bossId);
};

exports.findWeapons = (req, res, next) => {
  let bossId = req.params.name
  bossModel.getBossWeapons(res,bossId);
};