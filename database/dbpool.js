const mariadb = require('mariadb');

//create pool
/****
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     port:3306, 
     database: 'test', 
  //password: 'myPassword',
     connectionLimit: 40
});
****/

const pool = mariadb.createPool({
  host     : process.env.RDS_HOST_NAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME, 
  connectionLimit: 40
});


// Export pool.
module.exports = pool;
