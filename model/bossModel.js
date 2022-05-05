const mysql = require('../config/db').pool;

class bossModel{

    static getAllBosses(res){
        mysql.getConnection((error, conn) => {
            if(error) {return res.status(500).send({error: error})}
            conn.query(
              'SELECT id, bossName, location, souls, health FROM boss WHERE souls<>0;', (error, result, fields) => {
                if(error) {return res.status(500).send({error: error})}
                return res.status(200).send({size: result.length, bosses: result})
              } 
            );
        });
    }

    static getBossByName(res, bossId){
        mysql.getConnection((error, conn) => {
            if(error) {return res.status(500).send({error: error})}
            conn.query(
                'SELECT bossName, location, souls, health FROM boss WHERE id= ?;', [bossId], 
                (error, result, fields) => {
                if(error) {return res.status(500).send({error: error})}
                if(result.length == 0) {return res.status(404).send("boss not found")}
                
                if(bossId != "normal-ornstein" && "normal-smough") {
                  return res.status(200).send({boss: result, drops:`https://praise-the-api.herokuapp.com/bosses/drops/${bossId}`})
                } else {
                  return res.status(200).send({boss: result})
                } 
                
              }
            );
        });
    }

    static getBossWeapons(res, bossId){
      mysql.getConnection((error, conn) => {
          if(error) {return res.status(500).send({error: error})}
          conn.query(
              "SELECT bt.loot, bt.lootDescription FROM boss AS b JOIN bossLoot AS bt  ON bossId= ? AND b.id = bossId;", [bossId], 
              (error, result, fields) => {
              if(error) {return res.status(500).send({error: error})}
              if(result.length == 0) {return res.status(404).send("boss not found")}
              return res.status(200).send({drops:result})
            }
          );
      });
  }
}

module.exports = bossModel;