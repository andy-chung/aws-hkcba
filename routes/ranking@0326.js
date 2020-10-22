var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  renderranking(req, res, next, 'ranking');
});


function renderranking(req, res, next, filename) {
  let nmlist = [];
  let mlist = [];
  let bmlist = [];
  let smlist = [];
  let goldmlist = [];
  let lmlist = [];
  let nlmlist = [];
  let gmlist = [];
  let ngmlist = [];

      console.log("======????========================")
  console.log(filename);
  console.log(typeof(filename));
      console.log("==============================")

  //pool.query


  //pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='NM'", filename)
  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NGM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nmlist = rows;

      //pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='M'", filename)
  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='NGM'", ['ranking'])
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      mlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='BM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      bmlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='SM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      smlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='GoldM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      goldmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='LM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      lmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='NLM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nlmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='GM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      gmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ? on members.id=Member_id and Rank='NGM'", filename)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('ranking', {ngm_list:rows, gm_list: gmlist, nlm_list: nlmlist, lm_list: lmlist, goldm_list: goldmlist, sm_list: smlist, bm_list: bmlist, m_list: mlist, nm_list: nmlist});
    })
    .catch(err => {
      res.send(err);
    });

    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });

    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


}



router.get('/previous', function(req, res, next) {
  res.send('response with a resource');
});


module.exports = router;
