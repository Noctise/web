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

