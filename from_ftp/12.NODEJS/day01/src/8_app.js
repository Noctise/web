//8_app 模块 加载引入 7_module模块内容

//1:引入7_module模块   . 当前目录
var m = require("./7_module");
console.log(m.age);
m.connect();
