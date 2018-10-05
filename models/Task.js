var db=require('../dbconnection'); //reference of dbconnection.js
 
var Task={
 
message:function(body,callback) {
    console.log(body["message"]);
    return db.query("Select * from enrollment",callback);
},
// getAllTasks:function(body,callback){
   
//  var ret=db.query("Select * from enrollment",callback);

// return ret;
 
// },
//  getTaskById:function(id,callback){
 
// return db.query("select * from task where Id=?",[id],callback);
//  },
//  addTask:function(Task,callback){
//  return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
//  },

 deleteEnrollment:function(phone,callback){
  return db.query("DELETE FROM `demo`.`enrollment` WHERE `phoneNo` =?",[phone],callback);
 },
//  updateTask:function(id,Task,callback){
//   return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
//  },
 saveResponse1:function(no,response,callback) {
     return db.query("update enrollment set response1 =?,count=? where phoneNo=?",[response,1,no],callback);
 },
 saveResponse2:function(no,response,callback) {
    return db.query("update enrollment set response2 =?,count=? where phoneNo=?",[response,3,no],callback);
},
saveResponse3:function(no,response,callback) {
    return db.query("update enrollment set response3 =?,count=? where phoneNo=?",[response,5,no],callback);
},
saveRank1:function(no,response,callback) {
    return db.query("update enrollment set rank1 =?,count=? where phoneNo=?",[response,2,no],callback);
},
saveRank2:function(no,response,callback) {
   return db.query("update enrollment set rank2 =?,count=? where phoneNo=?",[response,4,no],callback);
},
saveRank3:function(no,response,callback) {
   return db.query("update enrollment set rank3 =?,count=? where phoneNo=?",[response,6,no],callback);
},
getCount:function(phone,callback){
    return db.query("Select count from enrollment where phoneNo=?",[phone],callback);
}
,checkEnrollment(no,callback){
    var sql = `select count(*) as a_count from enrollment where phoneNo=?`;
     return db.query(sql,[no],callback);
}
 ,enroll:function(no,callback) {
  return db.query("Insert into enrollment (`phoneNo`) values(?)",[no],callback
     );
 },
 getCurrentSymptoms: function(phone,callback) {
     var sql = `CALL getCurrentSymptoms(?)`;
     return db.query(sql,[phone],callback);
 },
 getSymptopms: function(row,callback) {
     return db.query("Select * from symptoms",callback)
 }
 
 ,getSymptopmByID: function(id,callback) {
    return db.query("Select name from symptoms where idsymptoms = ?",[id],callback)
}
,getResponse1: function(phone,callback) {
    return db.query("Select response1 from enrollment where phoneNo = ?",[phone],callback)
}
,getResponse2: function(phone,callback) {
    return db.query("Select response2 from enrollment where phoneNo = ?",[phone],callback)
}
,getResponse3: function(phone,callback) {
    return db.query("Select response3 from enrollment where phoneNo = ?",[phone],callback)
}
};
 module.exports=Task;