//实现文件复制操作
const fs = require("fs");
//1:创建二个文件名
var src = "./public/4.css";
var des = "./public/b.backup.css";

console.log("1:复制文件开始");
//2:同步读取文件内容
var data = fs.readFileSync(src);
//3:同定入文件内容
fs.writeFileSync(des,data);
console.log("2:复制文件结束");
