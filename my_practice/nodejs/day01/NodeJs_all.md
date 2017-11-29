## 一. 概述
*NodeJS不是JS，就一个软件开发平台(安装服务器端),它的竞争对手，PHP/JSP/ASP!历史上第一次有一种语言可以通吃前后端.*<br>
[官网](http://www.nodejs.org)www.nodejs.org

### 数据类型:js vs NodeJS

前端JS的数据类型 | 后端NodeJS数据类型
---|---
基本/原生/值类型/原始..number/string/boolean/null/undefined | 基本/原生/值类型/原始..number/string/boolean/null/undefine    
ES对象:String/Number/Boolean/Math/Date/RegExp/Object/Function. | ES 对象/Math/RegExp/Date/Object/Function/Boolean/...
BOM:window/document/screen/location/navigator/event | none
DOM:Node/Element/Att...| none
none | NodeJS官方与第三方对象 https://www.npmjs.com/
用户自定义对象 | 用户自定义对象

![image](http://127.0.0.1/img/nodejs/p1.png)

### 变量与常量
    var age = 20;
    const PI = 3.14;

### 运算符
算术运算符 比较运算符 逻辑运算符 位运算符 三目运算符 赋值运算符 特殊运算符

### 逻辑结构
> 循环结构:while  do..while for(;;) for(..in..) for(..of..)

> 练习:创建4.js 声明一个保存5个学生成绩数组，使用三种for循环获取每个学生成绩.
```javascript
var scoreList = [89,100,90,98,101];
//方式一:
for(var i=0;i<scoreList.length;i++){
  console.log(i+'=>'+scoreList[i]);
}
console.log("-------------");
//方式二:
//ES5 新语法
for(var i in scoreList){ //遍历出每个下标
   console.log(i+"=>"+scoreList[i]);
}
console.log("-------------");
//方式三:
//ES6 
for(var v of scoreList){ //v 成绩
   console.log(v);
}
```
> 选择结构 if..else   switch...case

> 练习:创建一个变量var path="/index";使用二种选择结构，判断path的值为哪种(/index、/search、/login)调用不同的执行函数.

```javascript
function indexFn(){console.log("index");}
function searchFn(){console.log("search");}
function loginFn(){console.log("login");}
//path 路径
var path = "/login1";

//方式一:if else
if(path==="/index"){
  indexFn();
}else if(path==="/search"){
  searchFn();
}else if(path==="/login"){
  loginFn();
}else{
  indexFn();
}
//方式二:switch
switch(path){
  case "/index":indexFn();break;
  case "/search":searchFn();break;
  case "/login":loginFn();break;
  default:indexFn();break;
}
```
### 找质数
> 100以内的质数

```javascript
//1:创建外层循环 3-100  数值1
for(var i=3;i<=100;i++){      //i=5
 //2:创建内层循环 2-i-1  数值2
 for(var j=2;j<i;j++){        //j=5
  //3:如果数值2可以除尽数值1
  if(i%j==0){
   //4:退出循环 不是质数
   break;
  }
  //5:循环外
 }//for j end
 //6:如果数值1==数值2  是质数
 if(i==j){
   console.log("是质数:"+i);
 }
}//for i end
```

## 二.模块(NodeJS中特有概念)(重点)
> 一个web项目功能可以分为很多个“模块”：如商品管理模块，支付模块，促销模块，商家管理....

*NodeJS按照不同的功能，把函数，对象分别保存在不同文件，目录称为"Module".*

### 1.quick Start
```javascript
//7_module.js 三个数据 对外公开二个
//模块:7_module
//1:创建变量
var age = 22;
//2:创建函数1
function connect(){
 console.log("连接系统");
}
//3:创建函数1
function close(){
 console.log("关闭系统");
}
//exports对象:作用向外公开数据
//注意  age不要加()
exports.age = age;
exports.connect = connect;
```
```javascript
//8_app 模块 加载引入 7_module模块内容1
//1:引入7_module模块   . 当前目录
var m = require("./7_module");
console.log(m.age);
m.connect();
```
---
```javascript
//9_circle.js  模块
//15:55--16:05
//1:常量 PI = 3.14;
const PI = 3.14;
//2:创建函数1 getSize(r)      返回圆面积
function getSize(r){
  return PI * r * r;
}
//3:创建函数2 getPerimeter(r) 返回圆周长
function getPerimeter(r){
  return PI * r * 2; 
}
//公开后二个函数
exports.size = getSize;
exports.getPerimeter = getPerimeter;
//10_app.js 
//引入t_circle并且调用后二个函数
```
```javascript
//1:引入 9_circle 模块
var m = require("./9_circle");
//2:调用二个函数
//size
var rs = m.size(3);
//有返回值的函数可以直接输出
//如:console.log(m.size(3))
console.log(rs);
//getPerimeter
var rs = m.getPerimeter(3);
console.log(rs);
```
---

NodeJS中每个模块都是一个独立构造函数，解释器会为每个模块添加如下代码:
```javascript
 (function (exports, require, module,  __filename, __dirname) { 
size(); //自己编写内容
});
 exports:{}   用于声明向外部导出自己的成员
 require:fn   用于导入其它的模块，创建指定模块对象 new
 module:    代表当前模块
 __filename  当前文件绝对路径;
 __dirname  当前文件所属目录绝对路径;
```

### 2.NodeJS的模块中exports和module.exports对象区别是什么?
> Same:二者都可以用于向外界导出自己的内部成员

> Different: module指代当前模块对象，直正导出的是moulde.exports。
NodeJS底层有代码 exports = module.exports

> 所以:若只是给exports对象添加新的成员,则等价于给module.exports添加新成员，但是若修改了exports的指向，则不公产生实质作用.

#### Exercise

> 创建13_ArrayUtils.js 创建两个函数<br>
  sum(arr) 返回数组中的数值和<br>
  avg(arr) 返回数组中数值的平均值<br>
  导出两个函数
  创建14_app.js 引入 13_ArrayUtils.js 调用公开两个函数
  
```javascript
//第一函数:数组求和
function sum(arr){
 var result = 0;
 for(var v of arr){
    result += v;
 }
 return result;
}
//第二个函数:数组平均值
function avg(arr){
  return sum(arr)/arr.length;
}
//导出指定数据
//exports.sum = sum;
//exports.avg = avg;
//导出指定数据
module.exports.sum = sum;
module.exports.avg = avg;
```
```javascript
var m = require("./13_ArrayUtils");
var list = [1,2,3,4,5,6];
console.log(m.sum(list));
console.log(m.avg(list));
```
> 创建14_app.js <br>
每个模块都可以使用自己的require()函数引入加一个模块--底层本质就是创建指定模块的一个对象实例.<br>
require("./模块文件名");<br>
每个模块可以使用exports对象向外导出/公开一些自己内部的成员供其它的模块使用.<br>
 exports.成员名=值
 
```javascript

```
### 3.NodeJS 模块的分类
1. nodejs官方提供的模块--安装在解释器内部<br>
> var 模块名 = require("模块名");
2. 第三方编写的模块
3. 用户自定义的模块
> exports.x= y + require("./模块文件名");

### 4.NodeJS预定义--Global
> 该模块提供的可以直接使用,而无需 require("global");

header 1 | header 2
---|---
exports | 用于向外部导出当前模块的内部成员
module | row 2 col 2
__filename | 返回当前模块的绝对路径
__dirname | 返回当前模块所属目录绝对路径
console |控制对象,注意该以象与chorme中console
setInterval(time,fn); |
setTimeout(time,fn); | 
setImmediate(fn); | 等价于 setTimeout(0,fn);

### 5.Homework
> 仿写NodeJS提供的一个模块 URL<br>
创建模块文件 myURL,向外出现一个方法<br> resolve(url),该方法接收的参数形如:<br> http://www.jd.com:8080/index?uname=tom&age=10<br>
返回对象:形如<br>
{
 protocol:'http',<br>
 sever:"www.jd.com",<br>
 port:80,<br>
 path:"/index?uname=tom&age=10"<br>
}<br>
再编写一个主模块:引入上述模块并调用
