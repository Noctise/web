//功能:同步(Synchronize)文件中的内容
//NodeJS解析器，磁盘[一个工作时，另一个等待]
//15:27--15:32  public/index.html
//1:加载文件模块   fs
const fs = require("fs");
//2:读取文件的内容 fs.readFileSync("");
var path = "./public/index1.html";
var data = fs.readFileSync(path);
//3:输出文件的内容
console.log(data);
console.log(data.toString());
//错误:
//ENOENT: no such file or directory, open
//原因:没有匹配文件或目录
//解决:文件名或者目录你写错了