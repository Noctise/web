const mysql=require("mysql");
var conn = mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
    database:"jd"
});
var sql="INSERT INTO jd_user VALUES(null,?,?)";
conn.query(sql,["james","123"],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        if(result.affectedRows>0){
            console.log("insert succeed:"+result.insertId);
        }
    }
});
conn.end();