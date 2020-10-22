var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

router.get('/', function(req, res, next) {
  res.render('filterpostsform');
});



router.post('/', function(req, res, next) { 
  console.log('***** filtering **********');
  console.log(req.body.inputGeneral);
  console.log(typeof(req.body.inputGeneral));
  console.log(req.body.inputTournament);
  console.log(typeof(req.body.inputTournament));
  console.log(req.body.inputDate);
  console.log(typeof(req.body.inputDate));
  console.log('***** filtering **********');
  res.send('respond with a resource');

});



module.exports = router;
