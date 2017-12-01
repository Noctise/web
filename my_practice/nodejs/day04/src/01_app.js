//1:加载相应模块 http mysql fs url
//2:创建连接池
//3:创建服务器
//4:绑定一个监听端8080
//5:绑定事件request接收客户请求
//req request  请求对象
//res response 响应对象
//6:第一个请求
///stu/add 读取文件  /public/stu/add.html
//7:第二个请求
///stu/add.do
//7.1:获取参数 学生姓名 成绩 入学时间
//7.2:添加至数据库
//7.3:添加成功！新记录编号为 5
//8:/stu/list
//8.1 查询tmooc/stu表中所有内容
//8.2 json

const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
const url = require("url");

var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "tmooc"
});

var server = http.createServer();
server.listen(8080);

server.on("request", (req, res) => {
    var obj = url.parse(req.url, true);
    var path = obj.pathname;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    if (path === "/stu/add") {
        fs.readFile("./public/stu/add.html", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (path === "/stu/add.do") {
        var n = obj.query.sname;
        var s = obj.query.score;
        var t = obj.query.schooltime;
        pool.getConnection((err, conn) => {
            var sql = "insert into stu values(null,?,?,?)";
            conn.query(sql, [n, s, t], (err, result) => {
                res.end("insert succeed : insertid" + result.insertId);
                conn.release();
            });
        });
    } else if (path === "/stu/list") {
    } else {
        res.statusCode = 404;
        res.end("<h1>Files Not Found!!</h1>");
    }
});