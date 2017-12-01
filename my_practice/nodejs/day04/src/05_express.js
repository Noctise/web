const mysql = require("mysql");
const http = require("http");
const express = require("express");

var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd"
});
// console.log(pool);
var app = express();
var server = http.createServer(app);
server.listen(8080);

app.get("/stu/:sid", (req, res) => {
    var sid = req.params.sid;
    pool.getConnection((err, conn) => {
        var sql = "select * from jd_user where uid=?";
        conn.query(sql, [sid], (err, result) => {
            res.json(result);
            conn.release();
        });
    });
});

