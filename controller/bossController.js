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

exports.findById = (req, res, next) => {
    let bossId = req.params.id

    mysql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM boss where id = ?;', [bossId], 
            (error, result, fields) => {
            if(error) {return res.status(500).send({error: error})}
            return res.status(200).send({result})
          } 
        );
    });
};