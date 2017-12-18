//1:加载相应的模块 http mysql express querystring
const http = require("http");
const mysql = require("mysql");
const express = require("express");
const qs = require("querystring");

var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"dangdang"
});
//2:创建服务器
//3:绑定监听端口
var app = express();
var server = http.createServer(app);
server.listen(8080);

//处理静态文件 html/css/js
//添加中间件->作用处理静态资源文件
//所有文件public
//示例:
// http://127.0.0.1:8080/booklist.html
// http://127.0.0.1:8080/addbook.html
//  http://127.0.0.1:8080/jquery1.0.11.js
// http://127.0.0.1:8080/index.css
// 300->html 1000->jpg
app.use(express.static("public"));

//功能一:查询图书列表
//1:处理请求 GET /book
//a:处理请求 get /book
app.get("/book",(req,res)=>{
 //b:获取数据库连接
 pool.getConnection((err,conn)=>{
  //c:创建SQL,并且发送SQL
  var sql = "SELECT * FROM book";
  conn.query(sql,(err,result)=>{
   if(err)throw err;
   //d:result [{],{}]
   //e:将结果发送客户json
   res.json(result);
   conn.release();
  });
 });
});


//功能二:添加图书
//10:45--10:55
//1:接收客户POST请求 请示路径/addbook
app.post("/addbook",(req,res)=>{
 //2:绑定事件data
 req.on("data",(data)=>{
  //3:事件处理函数中 解析POST传送参数
  var obj =   qs.parse(data.toString());
  //4:获取图书标题
  var t = obj.title;
  //5:获取图书价格
  var p = obj.price;
  //6:获取图书简介
  var i = obj.intro;
  //7:获取连接
  pool.getConnection((err,conn)=>{
   //8:创建SQL语句，并且发送sql 语句
   var sql = "INSERT INTO book VALUES(null,?,?,now(),?)";
   conn.query(sql,[t,p,i],(err,result)=>{
    //9:成功返回 json code:1 bid:5    
    if(err)throw err;
    res.json({code:1,bid:result.insertId});
    conn.release();
   });
  });
 })
});


