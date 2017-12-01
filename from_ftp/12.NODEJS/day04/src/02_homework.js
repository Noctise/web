//1:加载相应模块 http mysql fs url
const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
const url = require("url");
//2:创建连接池
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd"
});
//3:创建服务器
//4:绑定一个监听端8080
//5:绑定事件request接收客户请求
var server = http.createServer();
server.listen(8080);
//req request  请求对象
//res response 响应对象
server.on("request", (req, res) => {
    //解析请求路径
    var obj = url.parse(req.url, true);
    var path = obj.pathname;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    if (path === "/userlist") {
        pool.getConnection((err, conn) => {
            conn.query("SELECT * FROM jd_user", (err, result) => {

                var html = "<table border='1' width='80%'>";
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    html += `<tr>`;
                    html += `<td>${obj.uid}</td>`;
                    html += `<td>${obj.uname}</td>`;
                    html += `</tr>`;
                }
                html += "</table>";
                res.end(html);
                conn.release();
            });

        });

    } else {
        res.statusCode = 404;
        res.end("<h1>File Not Found!!</h1>");
    }
});
