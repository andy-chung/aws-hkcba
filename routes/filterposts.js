var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

router.get('/', function(req, res, next) {
  res.render('filterpostsform');
});



router.post('/', function(req, res, next) { 
  /*****************
  console.log('***** filtering **********');
  console.log(req.body.inputGeneral);
  console.log(typeof(req.body.inputGeneral));
  console.log(req.body.inputTournament);
  console.log(typeof(req.body.inputTournament));
  console.log(req.body.inputDate);
  console.log(typeof(req.body.inputDate));
  console.log('***** filtering **********');
   ******************/

  let fromDate = '';
  let authorGeneral = '';
  let authorTournament = '';
  let authorGallery = '';

  if (req.body.inputDate) 
    fromDate = req.body.inputDate;
  else
    fromDate = '0000-00-00';

  if (req.body.inputGeneral) 
    authorGeneral = req.body.inputGeneral;
  else
    authorGeneral = '';

  if (req.body.inputTournament) 
    authorTournament= req.body.inputTournament;
  else
    authorTournament = '';

  if (req.body.inputGallery) 
    authorGallery = req.body.inputGallery;
  else
    authorGallery = '';



  if (fromDate == '0000-00-00') {
    fromDate = '2049-12-31';
  }
  console.log(fromDate);
  //pool.query
  pool.query("SELECT * from news where (Author = ? or Author = ? or Author = ?) and Pdate < ? order by Pdate desc limit 8", 
  [authorGeneral, authorTournament, authorGallery, fromDate])
    .then((rows) => {
      res.render('homepage', {post_list:rows});
    })
    .catch(err => {
      res.send(err);
    });

});



module.exports = router;
