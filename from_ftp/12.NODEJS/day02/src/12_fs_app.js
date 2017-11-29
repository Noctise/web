//功能:同步向文件中追加内容
//NodeJS解析器和磁盘 一个工作时，另一个在等待

//1:加载指定文件模块
const fs = require("fs");
//2:创建日期字符串
var str = new Date().toString();
//3:同步追加 "./public/2.log"
//  appendFileSync(file,str)
console.log("1:追加开始");
var path = "./public/2.log";
fs.appendFileSync(path,str);
console.log("2:追加结束");

//16:25---16:30
//练习:使用上述方法，实现public/4.css
//文件复制为 b.backup.css
