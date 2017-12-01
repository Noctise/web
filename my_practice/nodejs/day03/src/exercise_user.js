//1:加载相应模块  http mysql fs url 16:30--16:45
//2:创建连接池
//3:创建web服务器
//4:监听8080端口
//5:绑定事件 request req,res
//6:判断不同请求处理不同业务
//7:/register
//8:/register.do
//9:/login
//10:/login.do
const http = require("http");
const mysql = require("mysql");
const fs = require("fs");
const url = require("url");

var pool = mysql.createPool({
    host: "127.0.0.1", user: "root", password: "", database: "jd"
});

var server = http.createServer();
server.listen(8080);
server.on("request", (req, res) => {
    var objUrl = url.parse(req.url, true);
    var path = objUrl.pathname;
    res.setHeader("Content-Type", "text/html;charset=utf-8");


if(path==="/register"){
    fs.readFile("./public/register.html",(err,data)=>{
       if(err) throw err;
       res.end(data);
    });
}else if(path==="/register.do"){
    var u=objUrl.query.uname;
    var p=objUrl.query.upwd;
    pool.getConnection((err,conn)=>{
        var sql="INSERT INTO jd_user VALUES(null,?,?)";
        conn.query(sql,[u,p],(err,result)=>{
            if(result.affectedRows>0){
                res.end("<h1>注册成功</h1>");
            }else{
                res.end("<h1>注册失败</h1>");
            }
            conn.release();
        });

    });
}else if(path==="/login"){

}else if(path==="/login.do"){

}else{
    res.statusCode=404;
    fs.readFile("./public/404.html",(err,data)=>{
        if(err)throw err;
        res.end(data);
    });
}
});