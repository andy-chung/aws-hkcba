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


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NM'")
    .then((rows) => {
      //res.send(rows);
      nmlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='M'")
    .then((rows) => {
      //res.send(rows);
      mlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='BM'")
    .then((rows) => {
      //res.send(rows);
      bmlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='SM'")
    .then((rows) => {
      //res.send(rows);
      smlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='GoldM'")
    .then((rows) => {
      //res.send(rows);
      goldmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='LM'")
    .then((rows) => {
      //res.send(rows);
      lmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NLM'")
    .then((rows) => {
      //res.send(rows);
      nlmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='GM'")
    .then((rows) => {
      //res.send(rows);
      gmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join ranking on members.id=Member_id and Rank='NGM'")
    .then((rows) => {
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



});




router.get('/previous', function(req, res, next) {
  //res.send('Hello world');
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


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='NM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nmlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='M'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      mlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='BM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      bmlist = rows;

  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='SM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      smlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='GoldM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      goldmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='LM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      lmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='NLM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      nlmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='GM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      gmlist = rows;


  pool.query("select ROW_NUMBER() OVER (order by Mname) as Rownum, Mname, Tbp,Tgp,Tpp from members inner join rankingprev on members.id=Member_id and Rank='NGM'")
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



});

module.exports = router;
