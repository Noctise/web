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