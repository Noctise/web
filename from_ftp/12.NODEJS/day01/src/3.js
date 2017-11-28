//九九乘法表
//1:拼接字符串 ES6 模板
//2:多次输出

var str = "";
for(var i=1;i<10;i++){
  for(var j=1;j<=i;j++){
     str += `${j}*${i}=${i*j}`;
     //ES6 新特性,NodeJS不存在兼容性
  }
  str += "\r\n";
}
console.log(str);
