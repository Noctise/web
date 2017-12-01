//使用mysql模块执行DML[INSERT/DELETE/UPDATE]
//1:加载mysql模块
const mysql = require("mysql");
//2:创建连接:mysql启动 
//库jd 表jd_user uid uname upwd
var conn = mysql.createConnection({
 host:"127.0.0.1",   //mysql安装主机名或ip
 user:"root",
 password:"",
 database:"jd"
});
//3:创建SQL并且发送sql
var uname = "tom";
var upwd = "123";
$sql = `INSERT INTO jd_user VALUES(null,'${uname}','${upwd}')`;
conn.query($sql,(err,result)=>{
 //4:判断是否执行成功
 if(err){
   console.log(err);
 }else{
   console.dir(result);
   //affectedRows 执行sql影响记录行数
   if(result.affectedRows>0){
   //insertId   执行insert自增id值
     console.log("添加记录执行成功:"
     +result.insertId);
   }else{
     console.log("添加失败");
   }
 }
});
 //5:关闭连接
conn.end();

