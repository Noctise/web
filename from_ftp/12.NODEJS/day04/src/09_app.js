//1:加载相应模块 http express querystring
const http = require("http");
const express = require("express");
const qs = require("querystring");

//2:创建服务器对象
//3:绑定监听端口8080
var app = express();
var server = http.createServer(app);
server.listen(8080);

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});//
app.post("/add", (req, res) => {
    //接收客户端请求主体中数据
    req.on("data", (data) => {
        //接收了请求主体数据
        console.log(data);//Buffer
        console.log(data.toString());
        var obj = qs.parse(data.toString());
        console.log(obj);
    });
});


