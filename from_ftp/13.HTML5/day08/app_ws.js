//功能:创建WebSocket服务器程序

//1:加载相应模块 ws
const ws = require("ws");
//2:创建WebSocket服务器
//3:指定端口 9001
var server = new ws.Server({port:9001});
console.log("WS服务器开始监听端口9001");
//4:接收客户端连接请求
server.on("connection",(socket)=>{
  console.log("WS服务器接收到一个连接");
 //5:ws服务器:向客户端不停发送消息
 var counter = 0;
 var timer = setInterval(()=>{
   counter++;
   socket.send("I am Server - "+counter);
 },1000);
 //6:ws服务器:接收客户端发来的消息
 socket.on("message",(msg)=>{
   console.log("服务器接收消息"+msg);
 });
 //7:WS服务器接收到客户端发来的断开连接请求
 socket.on("close",()=>{
    console.log("客户端断开连接");
    clearInterval(timer);//不再继续发送消息
 });
});
