//使用mysql模块执行DML[INSERT/DELETE/UPDATE]
//安全级别高一些
//var uname = "drop table jd_user #";
//sql = "INSERT INTO jd_user VALUES(null,'${uname}','${upwd}')";
//sql = "INSERT INTO jd_user VALUES(null,?,?)";["tom","123"]
//? 占位符
//1:加载mysql模块
const mysql = require("mysql");
//2:创建连接
var conn = mysql.createConnection({
  host:"127.0.0.1",//mysql服务器主机名或者IP
  user:"root",     //mysql服务器用户名
  password:"",     //mysql服务器密码
  database:"jd"    //你使用库名称
});
//3:创建sql并且发送sql
var sql="INSERT INTO jd_user VALUES(null,?,?)";
conn.query(sql,["james","123"],(err,result)=>{
  //4:判断
  if(err){
    console.log(err);
  }else{
    //判断添加记录影响行数
    if(result.affectedRows>0){
      //添加记录后自增id值是多少
      console.log("添加成功:"+result.insertId);
    } 
  }
});
//5:关闭连接
conn.end();