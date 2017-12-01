//错误: ..Auth 验证错误
//1:加载相应模块 mysql/http/express
const mysql = require("mysql");
const http = require("http");
const express = require("express");
//2:创建连接池
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd"
});
//3:创建web服务器
var app = express();
var server = http.createServer(app);
server.listen(8080);
//4:接收(GET请求 路径 处理函数) 定义路由
//5:/stu/3
//6:req.params.sid
//7:获取连接,查询指定用户信息并且发送json
app.get("/stu/:sid", (req, res) => {
    var sid = req.params.sid;
    //8:获取连接[17:28--17:30]
    pool.getConnection((err, conn) => {
        //9:创建sql并且发送sql
        var sql = "SELECT * FROM jd_user WHERE uid=?";
        conn.query(sql, [sid], (err, result) => {
            //10:result 数组
            //11:将指定对象转json对象发送
            //setHeader+stringify+write+end
            res.json(result);
            //12:连接释放
            conn.release();
        });
    });
});

