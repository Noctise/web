//作业:几个对象,对象属性有哪些
var obj1 = {age:10};    //1对象 {age:10}
var obj2 = obj1;        //1对象 {age:10}
obj1.age++;             //1对象 {age:11}
obj2 = {};              //2对象 {} {age:11}
console.log(obj1.age);  //2对象 {} {age:11}
console.log(obj2.age);  //2对象 {} {age:11}