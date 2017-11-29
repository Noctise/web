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
