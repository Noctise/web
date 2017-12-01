//功能:处理四个请求
//(1)/register     返回 public/register.html
//(2)/register.do  添加一条记录
//(3)/login        返回 public/login.html
//(4)/login.do     查询
//1:加载相应模块  http mysql fs url 16:30--16:45
const http  = require("http");
const mysql = require("mysql");
const fs    = require("fs");
const url   = require("url");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"jd"
});
//3:创建web服务器
var server = http.createServer();
//4:监听8080端口
server.listen(8080);
//5:绑定事件 request req,res
server.on("request",(req,res)=>{
 //6:判断不同请求处理不同业务
 var objUrl = url.parse(req.url,true);
 var path = objUrl.pathname;
 res.setHeader("Content-Type","text/html;charset=utf-8");
 //7:/register
 //8:/register.do
 //9:/login
 //10:/login.do
 if(path==="/register"){
  fs.readFile("./public/register.html",(err,data)=>{
    if(err)throw err;
    res.end(data);
  }); 
 }else if(path==="/register.do"){
  //解析客户请求参数 uname upwd
  var u = objUrl.query.uname;
  var p = objUrl.query.upwd;
  //获取连接
  pool.getConnection((err,conn)=>{
   //创建sql,并且发送sql
   var sql = "INSERT INTO jd_user VALUES(null,?,?)";
   conn.query(sql,[u,p],(err,result)=>{
      if(result.affectedRows>0){
        //执行成功 返回"<h1>注册成功</h1>"
        res.end("<h1>注册成功</h1>");
      }else{
        res.end("<h1>注册失败</h1>");       
      }
      conn.release();
   });
  });
 }else if(path==="/login"){
  fs.readFile("./public/login.html",(err,data)=>{
     if(err)throw err;
     res.end(data);
  }); 
 }else if(path==="/login.do"){
  //17:35--17:45
  //1:解析客户提交请求参数 uname/upwd
  var u = objUrl.query.uname;
  var p = objUrl.query.upwd;
  //2:获取数据库连接
  pool.getConnection((err,conn)=>{
  //3:创建sql语句，并且发送sql
  //SELECT * FROM jd_user WHERE uname=? and upwd=?
  var sql = "SELECT * FROM jd_user WHERE uname=? and  upwd=?";
  conn.query(sql,[u,p],(err,result)=>{
   //*4:判断result
   //5:返回 "登录成功" "登录失败"
   if(result.length===0){
    res.end("<h1>登录失败</h1>");
   }else{
    res.end("<h1>登录成功</h1>");
   }
   //6:连接归还
   conn.release();
  });

  });
 }else{
    res.statusCode = 404;
    fs.readFile("./public/404.html",(err,data)=>{
    if(err)throw err;
    res.end(data);
  }); 
 }
});