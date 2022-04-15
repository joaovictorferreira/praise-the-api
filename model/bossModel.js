const mysql = require('../config/db').pool;

class bossModel{

    static getAllBosses(res){
        mysql.getConnection((error, conn) => {
            if(error) {return res.status(500).send({error: error})}
            conn.query(
              'SELECT * FROM boss;', (error, result, fields) => {
                if(error) {return res.status(500).send({error: error})}
                return res.status(200).send({size: result.length, result})
              } 
            );
        });
    }

    static getBossByName(res, bossName){
        mysql.getConnection((error, conn) => {
            if(error) {return res.status(500).send({error: error})}
            conn.query(
                'SELECT * FROM boss WHERE bossName LIKE ?;', [bossName + '%'], 
                (error, result, fields) => {
                if(error) {return res.status(500).send({error: error})}
                if(result.length == 0) {return res.status(404).send("boss not found")}
                return res.status(200).send({result})
              } 
            );
        });
    }
}

module.exports = bossModel;