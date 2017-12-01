//1:加载相应模块 http fs url
const http = require("http");
const fs = require("fs");
const url = require("url");
//2:创建服务器
//3:绑定监听端口
var server = http.createServer();
server.listen(8080);
//4:绑定事件 request
server.on("request",(req,res)=>{
 //5:获取用户请求path
 var obj = url.parse(req.url,true);
 var path = obj.pathname;
 res.setHeader("Content-type","text/html;charset=utf-8");
 //6:处理 /register    返回html
 if(path==='/register'){
   fs.readFile("./public/register.html",(err,data)=>{
     if(err)throw err;
     //res.write(data);
     //res.end();
     //如果你只发送一次
     res.end(data);
   });//11:30--11:35
 }else if(path==='/register.do'){
    var u = obj.query.uname;
    var p = obj.query.upwd;
    var data = u+"_"+p+'\r\n'; //rn换行回车
    fs.appendFile('./public/user.log',data,(err)=>{
        res.end("<b>注册成功</b>");
    });
 }else{
    res.statusCode = 404;
    res.end("<b>您请求资源不存在</b>");
 }
 //7:处理 /register.do  获取用户名密码保存文件
});
