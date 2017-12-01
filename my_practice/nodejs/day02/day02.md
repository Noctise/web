### REVIEW
```
NodeJS:开发平台
  适用范围:适合IO密集型(微博，微信)项目，不适合CPU密集(天气预报)项目.
  前端JS和NodeJS区别
  前端JS:运行在客户端浏览器中,存在兼容性问题，数据类型:值类+引用类型(ES+BOM+DOM+自定义)
  NodeJS:运行于服务器(V8引擎),不存在兼容性，数据类型:值类+引用类型(ES+第三方对象+自定义)
  Node模块系统
  Nodejs中每个.JS文件都是一个"Module",每个模块都可以引入其它模块,也可以导出自己的成员(变量/函数/对象)供它的模块使用.
  (function (exports, require, module,  __filename, __dirname) { 
//自己编写内容
 var age = 20;
 var fn = function(){}
 
 exports.age = age;
 module.exports.fn = fn;
 //源代码    exports = module.exports;
 //##注意事项
 module.exports = {age:10,f:fn}; ///OK
 exports = {age:10,f:fn};       //ERROR
});
  exports与module.exports在使用上最大区别
  (1)module.exports可以向外导出对象或者是成员
  (2)exports只能向外导出成员

  Node模块的类型
  (1)官方提供原生模块  global/util/url/fs/http/....
(2)第三方模块        mysql/oracle/exports...
(3)自定义模块        文件模块和目录模块
```

#### Homework

```javascript
/**
*接收一个URL字符串，解析出其中的各个部分
*@param  path 要解析的URL字符串
*形如: http://www.jd.com:8080/index?uname=tom&age=10
*@return {} 包含解析出各个URL部分的对象
*/
//http://www.jd.com:8080/index?
function resolve(url){
  //1:创建空对象
  var result = {};
  //2:解析协议名称
  var i1 = url.indexOf("://");
  //3:截取http
  result.protocol = url.substring(0,i1);
  //4:解析主机名称 www.jd.com
  var i2 = url.lastIndexOf(":");
  result.hostname = url.substring(i1+3,i2);
  //5:解析请求路径
  var i3 = url.indexOf("/",i2);
  result.path = url.substring(i3);
  return result;
}
var url = "http://www.jd.com:8080/index?uname=tom&age=10";
var rs = resolve(url);
console.dir(rs);
```
## npm和目录模块管理
### 1.自定义模块两种形式
1. 文件模块
> 创建一个js文件如 m3.js 导出需要公开数据，其它模块可以require("m3") 模块
2. 目录模块

> **方法1**:创建一个目录必须名为node_modules,在此目录中再创建目录模块，假设m6,在m6目录再创建文件,必须名为package.json文件,其中声明main属性指定默认执行的启动文件名,如:6.js，其中导出公开数据。其它模块可以可以 require("m6")
![image](http://127.0.0.1/img/nodejs/p2.png)

> 方法2:创建一个目录,假设名为m4,其中创建名(必须)为index.js文件，导出公开的数据，主模块可以require("./m4");
```
const m = require("./m4");
console.dir(m);
```
```
// m4/index.js
module.exports.age = 22;
```

> 方法3:建一个目录,假设名为m5,其中创建名package.json文件,其中声明main属性指定默认执行的js文件,如 5.js,其中导出需要公开的数据。其它模块可以require("./m5");

```
//m5/5.js
module.exports.name = "tom";
```
```
//m5/package.json
{"main":"./5.js"}
```
```
const m = require("./m5");
console.dir(m);
```

#### EXERCISE
> 使用方式3：创建二个目录模块circle/rectangle,都对外公开二个方法size()/perimeter()返回指定图形的面积和周长.<br>
最后在最外层的主模块中引入上述二个模块<br>
circle.size(r) circle.perimeter(r)<br>
rectange.size(w,h); rectange.perimeter(w,h);

1. node_modules/circle

```javascript
//index.js
const PI = 3.14;
module.exports.size = function(r){
  return PI*r*r; 
}
module.exports.perimeter = function(r){
  return PI*r*2;
}
```
```json
//package.json
{
  "main":"./index.js"
}
```

2. node_modules/rectangle
```javascript
//index.js
//es6 创建匿名函数语法:(箭头函数)
//btn.onclick = (e)=>{}
module.exports.size = (w,h)=>{
  return w*h;
}
module.exports.perimeter = (w,h)=>{
  return 2 * (w+h);
}
```
```json
//package.json
{
 "main":"./index.js"
}
```
> 模块调用代码

```javascript
const c = require("circle");
console.log(c.size(3));
console.log(c.perimeter(3));
const m = require("rectangle"); 
console.dir(m);
```

## NPM包管理器
*Node Package Manager:NodeJS第三方模块管理器,下载,更新,删除维护包依赖关系的工具.*


*npm 默认到 www.npmjs.org 网站下载所需第三方模块*
> npm install [packagename] <br>
npm uninstall [packagename] 


### NodeJS官方提供原生模块--querystring
> 1.querystring模块用于处理 HTTP请求URL中查询字符串<br>
2.var obj = qs.parse(str);     把查询字符串解析js对象<br>
3.var str = qs.stringify(ob);   把js对象转换为查询字符串<br>

```javascript
//第一个原生模块:querystring
//功能:解析查询字符串

//1:加载查询字符串模块
const qs = require("querystring");
//2:将查询字符串转js对象
var str = "uname=tom&age=10&pno=1001";
var obj = qs.parse(str);
console.dir(obj);
//3:将一个js对象转换查询字符串
var obj2 = {ename:"tom",age:20};
var str = qs.stringify(obj2);
console.log(str);
```

### NodeJS官方提供原生模块-url
> 1.url模块用于解析http请求地址,获取其中各个部分<br>
2.var obj = url.parse(str);     把一个url字符串解析为一个对象<br>
3.var obj = url.parse(str,true); 把一个 url字符串解析为一个对象,并把其中查询字符串也解析为对象.<br>

```javascript
//1:加载指定url模块
const url = require("url");
//2:创建url地址
var u = "https://www.tmooc.cn:443/ad/index?uname=tom&age=10";
//3:解析obj对象
var obj = url.parse(u);
console.dir(obj);
//4:解析obj对象并且将查询字符串也一并解析为对象
var obj1 = url.parse(u,true);
console.dir(obj1);
console.log(obj1.query.uname);
console.log(obj1.query.age);
```

### NodeJS官司方提供原生模块-Buffer
> Buffer:缓冲区,本质是一个内存区域，用于暂存以后要用到数据(可能数字，字符串，图片、音频、视频...)

![image](http://127.0.0.1/img/nodejs/p3.png)

1. 创建缓存区并且分配指定大小
> var buf1 = Buffer.alloc(1024);  //字节b
2. 创建缓存区数字数组
> var buff2 = Buffer.from([1,4,5,6]);
3. 创建缓存区字符串
> var buff3 = Buffer.from("abcde...");
4. 把缓存中数据转字符串
> var str = buff3.toString();

```
//概念:计算机容量单位
//byte 字节 简写b 可以保存:1个数字，1个字母
//1024b=1kb
//1024kb=1mb
//1024mb=1gb
//1024gb=1tb
//1023tb=1pb

//1:加载缓存模块
//Buffer模块是全局模块，可以直接使用无需加载

//1:创建一个大小为10个字节缓冲区 
var buf1 = Buffer.alloc(10);
console.log(buf1);
//2:创建一个大小为3k缓冲区
var buf2 = Buffer.alloc(1024*3);
console.log(buf2);
//3:创建数字数组缓存区
var buf3 = Buffer.from([1,2,3]);
//4:创建保存字符串缓存区
var buf4 = Buffer.from("一二三");
//5:将缓存区转字符串
console.log(buf4);
console.log(buf4.toString());
```

### NodeJS官方提供原生模块--fs----->重点
*fs模块提供对文件系统的文件/目录进行增删改查，读写的功能.*
1. 同步读取文件中的内容
> var data = fs.readFileSync(file);
2. 同步向文件写入内容(删除己有内容)
> fs.writeFileSync(file,str/buff);
3. 同步向文件中追加写的内容(不删除己有内容)
> fs.appendFileSync(file,str/buff);
4. 异步读取文件的内容
> fs.readFile(file,function(err,data){})
5. 异步向文件中写入内容
> fs.writeFile(file,str/buf,function(err){});

```javascript
//1:加载文件模块   fs
const fs = require("fs");
//2:读取文件的内容 fs.readFileSync("");
var path = "./public/index.html";
var data = fs.readFileSync(path);
//3:输出文件的内容
console.log(data);
console.log(data.toString());
```
```javascript
//功能:同步(Synchornize)向文件中写入内容
//NodeJS解析器和磁盘 一个工作时，另一个在等待


//1:加载指定fs模块  15:45--15:50
const fs = require("fs");
//2:创建字符串 当前日期字符串
var str = new Date().toString();
//3:写入文件   public/2.log
console.log("1:文件写入开始");
//  2.log 不必先创建，nodejs发现如果没有此文件
//  先创建再写入
var path = "./public/2.log";
fs.writeFileSync(path,str);
console.log("2:文件写入结束");
```
```javascript
//功能:同步向文件中追加内容
//NodeJS解析器和磁盘 一个工作时，另一个在等待

//1:加载指定文件模块
const fs = require("fs");
//2:创建日期字符串
var str = new Date().toString();
//3:同步追加 "./public/2.log"
//  appendFileSync(file,str)
console.log("1:追加开始");
var path = "./public/2.log";
fs.appendFileSync(path,str);
console.log("2:追加结束");

//16:25---16:30
//练习:使用上述方法，实现public/4.css
//文件复制为 b.backup.css
```
```javascript
//实现文件复制操作
const fs = require("fs");
//1:创建二个文件名
var src = "./public/4.css";
var des = "./public/b.backup.css";

console.log("1:复制文件开始");
//2:同步读取文件内容
var data = fs.readFileSync(src);
//3:同定入文件内容
fs.writeFileSync(des,data);
console.log("2:复制文件结束");
```
```javascript
//功能:异步读取数据 public/index.html
//异步(Asynchronize)读取文件的内容
//NodeJS解释器，磁盘，可以同时工作

//1:加载指定文件模块
const fs = require("fs");
var path = "./public/index.html";
console.log("1:读取文件开始");
//2:异步读取文件内容
fs.readFile(path,function(err,data){
   if(err){
      console.log("2:文件读取出错");
      console.log(err);
   }else{
      console.log("3:文件读取成功");
      console.log(data.toString());
   }
});
console.log("4:读取文件结束");
```
```javascript
//功能:异步写入数据 public/3.log
//异步(Asynchronize)写入文件的内容
//NodeJS解释器，磁盘，可以同时工作

//1:加载指定文件模块
const fs = require("fs");
//2:创建字符串
var str = new Date().toString();
//3:异步写入
console.log("1:写入文件开始");
var path = "./public/3.log";
//文件异步写入 路径 内容  函数
fs.writeFile(path,str,function(err){
   if(err){
     console.log("2:写入文件失败");
     console.log(err);
   }else{
     console.log("3:写入成功");
   }
});
console.log("4:写入文件结束");
```
```javascript
//功能:异步写入数据 
//异步(Asynchronize)写入文件的内容
//NodeJS解释器，磁盘，可以同时工作

//1:加载文件模块
const fs = require("fs");
//2:创建变量二个指定路径
var src = "./public/4.css";
var des = "./public/44.backup.css";
//3:读文件
//function();当文件读取完成自动调用函数
fs.readFile(src,function(err,data){
   if(err){
     console.log(err);
   }else{
     console.log("文件读取成功");
     //data 有一个完成文件
     fs.writeFile(des,data,function(err){
       if(err){
         console.log(err);
       }else{
         console.log("写入完成");
       }
     });
   }
});
//4:写文件
//fs.writeFile(des,data,function(err){
//});

```
### NodeJS官方提供原生模块--http----->重点
*HTTP模块可用于编写基于HTTP协议客户端程序(即浏览器);也可以编写基于HTTP协议服务器(web服务器)*
#### 用http模块编写一个web服务器
> (1.接收客户端http请求消息<br>
(2.解析客户端请求消息<br>
(3.读取客户端请求文件<br>
(4.向客户端发送HTTP响应消息，主体就是客户端请求文件

```javascript
var server = http.createServer();
   server.listen(8080);
   server.on("request",function(req,res){
     req  请求对象
     res  响应对象
});
```
```javascript
//功能:创建web服务器
//1:加载http模块
const http = require("http");
//2:创建http服务器
var server = http.createServer();
//3:让http服务器监听端口
//端口 1-65535 你服务器 1023以上
//1023 以下互联网公共程序使用
//80 http  21 ftp 
server.listen(8080);
//4:绑定事件request
//当客户端发起请求 
//127.0.0.1:8080
server.on("request",function(req,res){
  //5:客户端请求哪些资源    req
  console.log("客户请求方式:"+req.method);
  console.log("客户端请求程序地址:"+req.url);
  console.log("客户请求版本:"+req.httpVersion);
  //6:响应客户端什么样数据  res
  //6.1:设置响应状态码    200
  res.statusCode = 200;
  //6.2:设置响应主体格式  text/html
  res.setHeader("Content-Type","text/html");
  //6.3:输出响应主体
  res.write("<html>");
  res.write("<h1>hello NodeJs</h1>");
  res.write("</html>");
  //6.4:输出结束
  res.end();
});
```

### HOMEWORK
> 作业1:异步复制文件<br>

> 作业2:使用Node创建一个web服务器，根据客户端请求地址不同，输出不同的html页面内容，<br>如
http://127.0.0.1:8080/login.html <br>
服务器应该返回 ./public/login.html中的内<br>若请求资源不存在,则返回 404响应消息