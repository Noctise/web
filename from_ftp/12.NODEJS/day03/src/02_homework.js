//功能：创建服务器客户客户端不同请求并且
//将相应的文件发送客户端.

//1:加载相应的模块 http url fs
const http = require("http");
const url = require("url");
const fs = require("fs");
//2:创建服务器
var server = http.createServer();
//3:绑定监听端口
server.listen(8080);
//4:绑定事件request
//req 请求对象
//res 响应对象
server.on("request", (req, res) => {
    //5:获取请求路径
    var objUrl = url.parse(req.url);
    var path = objUrl.pathname;
    //6:设置响应主体类型
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    //7:判断 /index  /login /search
    //8:读取./public/index.html 并且发送客户端
    if (path === '/index') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err;//若出现IO错误，抛出
            res.write(data);
            res.end();
        });
    } else if (path === '/login') {
        fs.readFile("./public/login.html", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if (path === '/search') {
        fs.readFile("./public/search.html", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });//10:30--10:33
    } else {
        fs.readFile("./public/404.html", (err, data) => {
            if (err) throw err;
            res.statusCode = 404;
            res.write(data);
            res.end();
        });
    }
    //9:如果判断不成功 404 not found
})