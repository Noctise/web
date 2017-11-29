//功能:同步(Synchornize)向文件中写入内容
//NodeJS解析器和磁盘 一个工作时，另一个在等待


//1:加载指定fs模块  15:45--15:50
const fs = require("fs");
//2:创建字符串 当前日期字符串
var str = new Date().toString();
//3:写入文件   public/2.log
console.log("1:文件写入开始");
//  2.log 不必先创建，nodejs发现如果没有此文件
//  先创建再写入
var path = "./public/2.log";
fs.writeFileSync(path,str);
console.log("2:文件写入结束");
