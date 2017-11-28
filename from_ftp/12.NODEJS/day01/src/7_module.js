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