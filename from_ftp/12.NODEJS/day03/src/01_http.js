//功能:创建http服务器
//所有客户端请求一律发送<h1>hello</h1>
//1:加载http模块
const http = require("http");
//2:创建http服务器
var server = http.createServer();
//3:绑定监听的端口--(服务器正式启动)
server.listen(8080);
//4:绑定事件request-->每次客户端请求都会触发
//req  request   请求对象:客户消息
//res  response  响应对象:
server.on("request",(req,res)=>{
 //5:设置响应状态码(默认 200 可以省略)
 res.statusCode = 200;
 //6:设置响应主体内容的类型(响应主体)
 res.setHeader("Content-type","text/html;charset=utf-8");
 //7:发送响应主体内容 write
 res.write("<h1>hello</h1>");
 //8:通知客户端响应消息发送结束
 res.end();
});
