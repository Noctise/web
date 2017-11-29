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