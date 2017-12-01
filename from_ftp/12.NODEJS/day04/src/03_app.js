
//使用http模块创建web服务器,监听端口8080
//使用express作为请求处理工具

//Express 请求处理函数默认提供 404响应处理

//1:加载http模块
const http = require("http");
//2:加载express模块
const express = require("express");
//3:创建express对象{函数}
var app = express();
//4:创建web服务器
var server = http.createServer(app);
//5:绑定监听端口
server.listen(8080);

