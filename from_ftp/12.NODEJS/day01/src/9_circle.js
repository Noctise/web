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