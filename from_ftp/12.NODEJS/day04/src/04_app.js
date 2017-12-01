//*1:加载http模块
//*2:加载express模块
const http = require("http");
const express = require("express");
//*3:创建express模块对象
var app = express();
//*4:创建服务器对象,小心参数
var server = http.createServer(app);
//*5:监听端口 8080
server.listen(8080);
//6:GET 请求路径   /  返回 <h1>首页</h1>
//get(请求路径,处理函数(req,res)=>{})
//处理get请求
app.get("/",(req,res)=>{
  //express中的req和res继承http模块中req/res
  //功能上有很大增强
  //示例 "<h1>首页</h1>" setHeader()write()end()
  res.send("<h1>首页</h1>");
  //send是express提供简化函数.相当于
  //setHeader();write();end();
});