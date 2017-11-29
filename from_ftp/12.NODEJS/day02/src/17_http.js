//功能:创建web服务器
//1:加载http模块
const http = require("http");
//2:创建http服务器
var server = http.createServer();
//3:让http服务器监听端口
//端口 1-65535 你服务器 1023以上
//1023 以下互联网公共程序使用
//80 http  21 ftp 
server.listen(8080);
//4:绑定事件request
//当客户端发起请求 
//127.0.0.1:8080
server.on("request",function(req,res){
  //5:客户端请求哪些资源    req
  console.log("客户请求方式:"+req.method);
  console.log("客户端请求程序地址:"+req.url);
  console.log("客户请求版本:"+req.httpVersion);
  //6:响应客户端什么样数据  res
  //6.1:设置响应状态码    200
  res.statusCode = 200;
  //6.2:设置响应主体格式  text/html
  res.setHeader("Content-Type","text/html");
  //6.3:输出响应主体
  res.write("<html>");
  res.write("<h1>hello NodeJs</h1>");
  res.write("</html>");
  //6.4:输出结束
  res.end();
});