//1:加载相应模块 http mysql fs url
const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
const url = require("url");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"tmooc"
});
//3:创建服务器
//4:绑定一个监听端8080
//5:绑定事件request接收客户请求
var server = http.createServer();
server.listen(8080);
//req request  请求对象
//res response 响应对象
server.on("request",(req,res)=>{
  //解析请求路径
  var obj = url.parse(req.url,true);
  var path = obj.pathname;
  res.setHeader("Content-Type","text/html;charset=utf-8");
  if(path==="/stu/add"){
    fs.readFile("./public/stu/add.html",(err,data)=>{
       if(err)throw err;
       res.end(data);
    });
  }else if(path==="/stu/add.do"){
    //1:获取参数 sname score schooltime
    var n = obj.query.snseleame;
    var s = obj.query.score;
    var t = obj.query.schooltime;
    //2:获取连接 tmooc/stu 表添加一条记录
    pool.getConnection((err,conn)=>{
      var sql = "INSERT INTO stu VALUES(null,?,?,?)";
      conn.query(sql,[n,s,t],(err,result)=>{
        res.end("添加学生信息成功:编号"+result.insertId);
        conn.release();//释放连接
      });
    });
    //3:返回 “添加成功 编号 5”
  }else if(path==="/stu/list"){
    var sql = "SELECT * FROM stu";
    pool.getConnection((err,conn)=>{
       conn.query(sql,(err,result)=>{
           if(err)throw err;
           //设置主体内容格式
           res.setHeader("Content-type","application/json;charset=utf-8");
           //将查询结果[]转换json字符串
           var str = JSON.stringify(result);
           res.end(str);
           conn.release();
       });
    });
  }else{
    res.statusCode = 404;
    res.end("<h1>File Not Found!!</h1>");
  }
});

//6:第一个请求
  ///stu/add 读取文件  /public/stu/add.html
//7:第二个请求
 ///stu/add.do
 //7.1:获取参数 学生姓名 成绩 入学时间
 //7.2:添加至数据库
 //7.3:添加成功！新记录编号为 5
//8:/stu/list  
 //8.1 查询tmooc/stu表中所有内容
 //8.2 json


