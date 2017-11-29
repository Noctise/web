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


