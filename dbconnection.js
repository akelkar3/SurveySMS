var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'admin',
 password:'admin',
 database:'demo'
 
});
 module.exports=connection;