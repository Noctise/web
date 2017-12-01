//((module,__dirname,__filename){});

//功能:创建Express web服务器
//14:15--14:20
//*1:加载http模块
//*2:加载express模块
const http = require("http");
const express = require("express");
//*3:创建express对象
var app = express();
//*4:创建web服务器
//*5:监听端口 8080
var server = http.createServer(app);
server.listen(8080);

//*6:express 处理 get /
//*7:向客户端输入<h1>hello</h1>
//req request  请求对象:功能更强
//res response 响应对象
app.get("/",(req,res)=>{
  //send=setHeader()+write()+end();
  res.send("<h1>home</h1>");
});

//8:express 处理  get  /index
//9:获取网页 /public/index.html 输出
app.get("/index",(req,res)=>{
    //sendFile=readFile+setHeader+write+end
    res.sendFile(__dirname+"/public/index.html");
    //路径:相对路径/绝对路径
    //相对路径=以当前程序路径为准
    //绝对路径=磁盘路径为准
    //e:\tao\nodejs\day04\src\public\index.html
    //TypeError: path must be absolute or 
    //specify root to res.sendFile
});