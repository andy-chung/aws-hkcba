var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let nmlist = [];
  let mlist = [];
  let bmlist = [];
  let smlist = [];
  let goldmlist = [];
  let lmlist = [];
  let nlmlist = [];
  let gmlist = [];
  let ngmlist = [];

  //pool.query


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='M'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      mlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='BM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      bmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='SM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      smlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='GoldM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      goldmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='LM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      lmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });



  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NLM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nlmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });

  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='GM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      gmlist = rows;
    })
    .catch(err => {
      res.send(err);
    });


  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NGM'")
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
});

module.exports = router;
