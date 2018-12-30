var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql')

const table_name= "users"

/* GET home page. */

router.get('/createdb', function (req, res, next) {
    var sql = `CREATE DATABASE IF NOT EXISTS usersdb`
    mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
  }).then((con)=>con.query(sql))
  .then(()=>{res.send("done");console.log("created db")})
  .catch((err)=>console.log(err))
});


router.get('/createTable',function(req,res){
 let sql= `CREATE TABLE IF NOT EXISTS ${table_name} (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(50), 
 year INT (50),
 rating INT (5), 
 url VARCHAR(100), 
 PRIMARY KEY (id))
 `
 mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'root',
   database: "usersdb"
   }).then((con)=>con.query(sql))
     .then((data)=>{console.log("created");res.send(data)})
     .catch((err)=>console.log(err))
});



module.exports = router;