//1:加载相应模块 http express
const http = require("http");
const express = require("express");
//2:创建express对象
var app = express();
var server = http.createServer(app);
server.listen(8080);
//3:创建web服务器
//4:监听端口8080
//5:处理不同请
//GET /index
app.get("/index",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});
//GET /index.css
app.get("/index.css",(req,res)=>{
  res.sendFile(__dirname+"/public/index.css");
});
//GET /logo
app.get("/logo",(req,res)=>{
  res.sendFile(__dirname+"/public/logo.jpg");
});
//GET /jquery
app.get("/jquery",(req,res)=>{
  //jquery-1.11.3
  res.sendFile(__dirname+"/public/jquery-1.11.3.js");
});