var buf1=Buffer.alloc(10);
console.log(buf1);

var buf2 = Buffer.alloc(1024*3);
console.log(buf2);

var buf3 = Buffer.from([1,2,3]);

var buf4=Buffer.from("一二三");

console.log(buf4);
console.log(buf4.toString());