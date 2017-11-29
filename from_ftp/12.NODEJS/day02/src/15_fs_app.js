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
