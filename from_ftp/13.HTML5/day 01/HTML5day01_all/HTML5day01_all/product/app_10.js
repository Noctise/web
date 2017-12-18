//1:加载相应的模块 http express
const http = require("http");
const express = require("express");
//2:创建服务器
var app = express();
var server = http.createServer(app);
//3:监听端口 8080
server.listen(8080);
//中间件--拦截所有请求 -->大门保安
app.use((req,res,next)=>{
  console.log("use 0:");
  console.log(req.url);//获取请求对象信息
  next();
});
//创建第一个:中间件
//url:拦截路径  /index  -->财务保安
app.use("/index",(req,res,next)=>{
 console.log("use 1:");
 next();//调用下一个中间件或路径--放行
});
//4:创建路由  路由=请求方式+url+fn
// get /index <h1>Get:Index</h1> 
app.get("/index",(req,res)=>{
  console.log("GET: /index");
  res.send("<h1>GET:Index</h1>");
});
//5:路由
app.get("/admin",(req,res)=>{
  console.log("GET: /admin");
  res.send("<h1>GET:admin</h1>");
});
app.use((req,res,next)=>{
  console.log("use 3");
  next();
});