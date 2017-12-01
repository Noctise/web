### REVIEW
```
NodeJS数据类型
(1):基本值类型(string/number/boolean/null/undefined)
(2):引用类型(ES原生类型/NodeJS/用户自定义类型)
NodeJS模块(Module)系统
(1)NodeJS官方提供模块系统
(2)第三方模块---npm
(3)自定义模块
  文件模块:circle.js  exports.size = size;
           app.js   require("./circle");
  目录模块:
          a:m4/index.js   require("./m4");
b:m5/package.json "main":"1.js"  1.js
c:node_modules/m3/package.json "main":"./index.js"
 index.js
NodeJS官方模块
(1)jquerystring 
  var obj = qs.parse("name=tom&age=10");
(2)url
  const url = require("url");
  var obj = url.parse("http://www.jd.com:8080/ad/?name=tom");
  var obj = url.parse("http://www.jd.com:8080/ad/?name=tom",true);
(3)Buffer
  var buf1 = Buffer.alloc(1024);
  var buf2 = Buffer.from("abc");
(4)fs
  const fs = require("fs");
  //同步IO操作
var data = fs.readFileSync(file);
  fs.writeFileSync(file,str/buff);
  fs.appendFileSync(file,str);
  //导步IO操作 
  fs.readFile(file,function(err,data){
});
fs.writeFile(file,str,function(err){});
(5)http
  var http = require("http");
  var server = http.createServer();
  server.listen(8080);
  server.on("request",function(req,res){
});
练习:静态web服务器,创建web服务器，接收请求,
    一律向客户端输入一个句<h1>hello</h1>
练习:动态web服务器，接收客户端请求，若客户端请求地址是/register,则向客户端输出 public/register.html的内容
<form action="register.do">
  <input name="uname"/>
  <input name="upwd"/>
  <input type="submit"/>
</form>
若客户端请求地址URL是register.do,则解析url中的查询字符串，把客户提交的uname和upwd追加写入public/user.log文件中，并向客户端输出"注册成功"
var obj = url.parse(req.url,true);
obj.query.uname
obj.query.upwd
```

```javascript
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
```
#### HOMEWORK

```javascript
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
```

## 第三方模块mysql(重点)
### Mysql中的SQL
1. Mysql中SQL
    - sql分类
        1. DDL(数据定义语句):CREATE,DROP,ALERT,TRUNCATE
        2. DML(数据操作语句)INSERT/UPDATE/DELETE
        3. DQL(数据查询语句)SELECT
        4. DCL(控制用户语句)GRANT/REVOKE
2. NodeJS访问Mysql服务器
*为了精简NodeJS解析器，官方没有提供访问数据库模块，必须使npm工具下载第三方模块.在www.npmjs.org上搜索mysql,可以得很多相关的模块，每个模块有使用说明.*
> npm install mysql

---

### 使用Mysql模块
1. Mysql模块使用步骤
    1. 创建数据库连接
        > const mysql = require("mysql");
        > var conn = mysql.createConnection({...});

    2. 创建sql,并且发送sql
        > conn.query("SQL...",function(err,result){});
        
    3. 关闭连接
        > conn.end();

```javascript
//使用mysql模块执行DML[INSERT/DELETE/UPDATE]
//1:加载mysql模块
const mysql = require("mysql");
//2:创建连接:mysql启动 
//库jd 表jd_user uid uname upwd
var conn = mysql.createConnection({
 host:"127.0.0.1",   //mysql安装主机名或ip
 user:"root",
 password:"",
 database:"jd"
});
//3:创建SQL并且发送sql
var uname = "tom";
var upwd = "123";
$sql = `INSERT INTO jd_user VALUES(null,'${uname}','${upwd}')`;
conn.query($sql,(err,result)=>{
 //4:判断是否执行成功
 if(err){
   console.log(err);
 }else{
   console.dir(result);
   //affectedRows 执行sql影响记录行数
   if(result.affectedRows>0){
   //insertId   执行insert自增id值
     console.log("添加记录执行成功:"
     +result.insertId);
   }else{
     console.log("添加失败");
   }
 }
});
 //5:关闭连接
conn.end();
```
```javascript
//safe version
const mysql=require("mysql");
var conn = mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"",
    database:"jd"
});
var sql="INSERT INTO jd_user VALUES(null,?,?)";
conn.query(sql,["james","123"],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        if(result.affectedRows>0){
            console.log("insert succeed:"+result.insertId);
        }
    }
});
conn.end();
```

##### 2. 连接池
- 连接池:通用提升系统性能手段
- 工作机制
    1. 在系统启动时自动创建多个连接(10)
    2. 保存在内存中,当应用需要连接时,租用一个连接
    3. 应用完后归还连接
- 步骤:
    1. 加载mysql模块
    2. 创建连接池 10
    3. 获取一个连接
    4. 创建sql语句，并且发送sql
    5. 判断
    6. 归还连接

```javascript
////功能:删除jd_user 表一条记录
const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd",
    connectionLimit: 10
});
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        var sql = "delete from jd_user where uid = ?";
        conn.query(sql, [9], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result.affectedRows);
            }
            conn.release();
        });
    }
});
```
```javascript
//功能：查询jd_user
const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1", user: "root", password: "", database: "jd", connectionLimit: 10
});
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        var sql = "select * from jd_user LIMIT ?,?";
        conn.query(sql, [0, 3], (err, result) => {
            console.log(result);
            conn.release();
        });
    }
});
```

### EXERCISE
> 练习:仿上述代码，使用NodeJS将jd/jd_product 产品表,添加一条记录.<br>注意?占位符的使用.(提高安全级别)

```javascript
const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd",
    connectionLimit: 10
});
pool.getConnection((err, conn) => {
    var sql = "insert into jd_product values(null,?,?,?)";
    conn.query(sql, ["apple 9", 9999, "9.jpg"], (err, result) => {
        console.log(result);
        conn.release();
    });
});
```

### EXERCISE
> 使用http和mysql模块 user_app<br>
创建动态web 服务器，接收如下请求URL<br>
/register   服务器向客户端返回 public/register.html内容<br>
/register.do接收客户端提交uname/upwd,保存jd_user<br> 返回"注册成功"<br>
/login     服务器向客户端返回 public/login.html内容<br>
/login.do  接收客户端提交的uname/upwd,查询数据库，返回"登录成功"或"用户名或密码错误"

```javascript

```

### HOMEWORK
> /userlist   服务器查询出数据库中所有用户信息jd/jd_user,以table形式输出.