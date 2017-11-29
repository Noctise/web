var age = 20;
var fn = function(){
  console.log("fn");
}

//module.exports.age = age;
//module.exports.fn = fn;
//正确语法:module.exports可以向外导出一个对象
//module.exports = {
//  age:age,
//  f:fn
//};  9:28--9:32
//错误语法:exports不可以向外导出一个对象
//         exports只可以向外导出一个成员
exports = {
  age:age,
  f:fn
};
