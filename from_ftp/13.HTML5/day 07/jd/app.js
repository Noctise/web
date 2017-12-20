//1:整个项目主模块文件
//负责创建web服务器对象,监听指定端口
//并向客户端提供静态资源+动态资源服务
const pool = require("./pool");
const http = require("http");
const express = require("express");
const qs = require("querystring");

//2:创建express对象
var app = express();
//3:创建web服务器 参数
var server = http.createServer(app);
//4:绑定监听端口
server.listen(8080);
//5:请求处理静态资源
app.use(express.static('public'));

//6:请求处理动态资源
//客户发送 /请求   如 http://127.0.0.1:8080/
//程序自动跳转 login.html页面请用户登录
app.get("/",(req,res)=>{
  res.redirect('login.html');
});
//7:模块一:用户登录
app.post("/login",(req,res)=>{
    //1:为req对象绑定事件  data
    req.on("data",(data)=>{
      //2:解析其中的参数对象 obj
      var obj = qs.parse(data.toString());
      //3:获取连接
      pool.getConnection((err,conn)=>{
        //4:创建SQL语句并且发送sql
        var sql = "SELECT * FROM jd_user";
        sql += " WHERE uname = ? AND upwd = ?";
        //5:判断??
        conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
          //5:判断??
          if(result.length>0){
            var output = {
              code:1,
              msg:"登录成功",
              uid:result[0].uid
            };
          }else{//未查询到数据.
            var output = {
              code:2,
              msg:"用户名或密码错误"
            };
          }
          res.json(output);//把数据转化为json
          conn.release();  //释放连接
        });
      });
    });
});

//7:模块二:用户注册
app.post("/register",(req,res)=>{
  //1:解析用户提交参数uname upwd homepage
  req.on("data",(data)=>{
    var obj = qs.parse(data.toString());
    //2:获取连接
    pool.getConnection((err,conn)=>{
      //3:创建SQL语句，并且发送SQL语句
    var sql = "INSERT INTO jd_user VALUES(NULL,?,?,?)";
      //4:获取返回结果
      conn.query(sql,[obj.uname,obj.upwd,obj.homepage],(err,result)=>{
        if(err)throw err;
        var output = {code:1,msg:"注册成功"};
        res.json(output);
        conn.release();
      });
      //5:返回json {code:1,msg:"注册成功"}
    });

  });

});

//模块三:svg消息统计图 16:40---17:05
app.get("/svgstat",(req,res)=>{
  var output = [
    {lable:"1月",value:1000},
    {lable:"2月",value:1100},
    {lable:"3月",value:1200},
    {lable:"4月",value:1300},
    {lable:"5月",value:1400},
    {lable:"6月",value:9000},
    {lable:"7月",value:900},
    {lable:"8月",value:1200},
    {lable:"9月",value:1300},
    {lable:"10月",value:1400},
    {lable:"11月",value:1900},
    {lable:"12月",value:2100}
  ];
  res.json(output);
});

//模块四:订单
// 产品图片/产品名称/产品价格/数量
// 产品表( 产品图片/产品名称/产品价格)
// 订单明细表(数量)
