const mysql = require('../config/db').pool;

exports.findAll = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
          'SELECT * FROM boss;', (error, result, fields) => {
            if(error) {return res.status(500).send({error: error})}
            return res.status(200).send({size: result.length, result})
          } 
        );
    });
};

exports.findByName = (req, res, next) => {
    let bossName = req.params.name

    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM boss where bossName = ?;', [bossName], 
            (error, result, fields) => {
            if(error) {return res.status(500).send({error: error})}
            return res.status(200).send({result})
          } 
        );
    });
};