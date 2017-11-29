//概念:计算机容量单位
//byte 字节 简写b 可以保存:1个数字，1个字母
//1024b=1kb
//1024kb=1mb
//1024mb=1gb
//1024gb=1tb
//1023tb=1pb

//1:加载缓存模块
//Buffer模块是全局模块，可以直接使用无需加载

//1:创建一个大小为10个字节缓冲区 
var buf1 = Buffer.alloc(10);
console.log(buf1);
//2:创建一个大小为3k缓冲区
var buf2 = Buffer.alloc(1024*3);
console.log(buf2);
//3:创建数字数组缓存区
var buf3 = Buffer.from([1,2,3]);
//4:创建保存字符串缓存区
var buf4 = Buffer.from("一二三");
//5:将缓存区转字符串
console.log(buf4);
console.log(buf4.toString());