var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //pool.query
  pool.query("select Tdate, Venue, Game, Link from tourneys left join tourneysopen on tourneys.id=Tourney_id order by Tdate")
    .then((rows) => {
      //res.send(rows);
      res.render('calendar', {tourney_list:rows});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;
