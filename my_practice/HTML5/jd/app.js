const poll = require("./pool");
const http = require("http");
const express = require("express");
const qs = require("querystring");

var app = express();
var server = http.createServer(app);

server.listen(8080);
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.redirect('login.html');
});

//model-1-userLogin
app.post("/login",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "select * from jd_user";
            sql += "where uname = ? and upwd = ?";
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                if(result.length>0){
                    var output = {
                        code:1,
                        msg:"login succeed",
                        uid:result[0].uid
                    };
                }
                res.json(output);
                conn.release();
            });
        });
    });
});

//model-2-register
app.post("/register",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());

        pool.getConnection((err,conn)=>{
            var sql = "insert into jd_user values(NULL,?,?,?)";
            conn.query(sql,[obj.uanme,obj.upwd,obj.homepage],(err,result)=>{
               if(err)throw err;
               var output = {code:1,msg:"注册成功"};
               res.json(output);
               conn.release();
            });
        });
    });
});