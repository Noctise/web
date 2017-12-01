//功能:二种参数获取方法
//1:加载相应模块 http express
const http = require("http");
const express = require("express");
//2:创建服务器绑定监听端口
var app = express();
var server = http.createServer(app);
server.listen(8080);

//参数传递方式一:
//GET    /user?uid=101&loc=bj
app.get("/user",(req,res)=>{
  //express框架为每个req对象添加属性query
  console.log(req.query.uid);
  console.log(req.query.loc);
  res.send("<h1>ok</h1>");
});
//参数传递方式二:
//GET /book/99/jsj
//GET /book/101/wx
app.get("/book/:bid/:btype",(req,res)=>{
  //接收请求地址中请求参数
  //express框架为每个req对象添加属性params
  console.log(req.params.bid);
  console.log(req.params.btype);
  res.send("<h1>ok</h1>");
});