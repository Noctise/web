//作业:几个对象,对象属性有哪些
var obj1 = {age:10};
var obj2 = obj1;
obj1.age++;
console.log(obj1.age);
console.log(obj2.age);
obj2 = {};
console.log(obj1.age);
console.log(obj2.age);


