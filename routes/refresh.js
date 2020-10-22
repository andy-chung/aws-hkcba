var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //   let mbrreglist = [];
  // let pname = '';

  if (!req.user) {
    res.redirect('/login');
  } else
    if (req.user.Username.toLowerCase() != 'hkcba') {
      res.redirect('/login');
    } else
  {


  //pool.query
  pool.query("delete from rankingprev")
    .then((rows) => {


  pool.query("insert into rankingprev select * from ranking")
    .then((rows) => {


  pool.query("delete from ranking")
    .then((rows) => {



  pool.query("delete from totalbp")
    .then((rows) => {


  pool.query("delete from totalgp")
    .then((rows) => {


  pool.query("delete from totalpp")
    .then((rows) => {


  pool.query("delete from totalbpm")
    .then((rows) => {


  pool.query("delete from totalgpm")
    .then((rows) => {


  pool.query("delete from totalppm")
    .then((rows) => {


  pool.query("insert into totalbp(Member_id, Tbp) select Member_id, sum(Points) from masterpoints group by Member_id,Category having Category='BP'")
    .then((rows) => {


  pool.query("insert into totalgp(Member_id, Tgp) select Member_id, sum(Points) from masterpoints group by Member_id,Category having Category='GP'")
    .then((rows) => {


  pool.query("insert into totalpp(Member_id, Tpp) select Member_id, sum(Points) from masterpoints group by Member_id,Category having Category='PP'")
    .then((rows) => {


  pool.query("insert into totalbpm(Member_id, Tbp) select members.id, Tbp from members left join totalbp on members.id=totalbp.Member_id order by members.id")
    .then((rows) => {


  pool.query("insert into totalgpm(Member_id, Tgp) select members.id, Tgp from members left join totalgp on members.id=totalgp.Member_id order by members.id")
    .then((rows) => {


  pool.query("insert into totalppm(Member_id, Tpp) select members.id, Tpp from members left join totalpp on members.id=totalpp.Member_id order by members.id")
    .then((rows) => {


  pool.query("insert into ranking(Member_id, Tbp, Tgp, Tpp) select members.id,Tbp,Tgp,Tpp from members left join (totalbpm,totalgpm,totalppm) on (members.id=totalbpm.Member_id and members.id=totalgpm.Member_id and members.id=totalppm.Member_id)")
    .then((rows) => {



  pool.query("update ranking set Rank='NM'")
    .then((rows) => {


  pool.query("update ranking set Rank='M' where Tbp >= 20")
    .then((rows) => {


  pool.query("update ranking set Rank='BM' where Tbp >= 50")
    .then((rows) => {


  pool.query("update ranking set Rank='SM' where Tbp >= 100 and Tgp >=10")
    .then((rows) => {


  pool.query("update ranking set Rank='GoldM' where Tbp >= 150 and Tgp >=25")
    .then((rows) => {


  pool.query("update ranking set Rank='LM' where Tbp >= 400 and Tgp >=50")
    .then((rows) => {


  pool.query("update ranking set Rank='NLM' where Tbp >= 600 and Tgp >=75 and Tpp >=5")
    .then((rows) => {


  pool.query("update ranking set Rank='GM' where Tbp >= 800 and Tgp >=100 and Tpp >=10")
    .then((rows) => {


  pool.query("update ranking set Rank='NGM' where Tbp >= 1000 and Tgp >=150 and Tpp >=20")
    .then((rows) => {


      res.redirect('/ranking');



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
});

module.exports = router;
