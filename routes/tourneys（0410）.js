var express = require('express');
var router = express.Router();

var pool = require('../database/dbpool')

/* GET users listing. */

router.get('/:id', function(req, res, next) {
  let game = '';

  //pool.query
  pool.query("select * from tourneys where id= ?", req.params.id)
    .then((rows) => {
      game = rows[0].Game;
       

  pool.query("select Mname, Description from masterpoints inner join members on Member_id=members.id and Tourney_id= ?", req.params.id)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      res.render('tourneys', {player_list:rows, Game: game});
    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });

});

module.exports = router;
