var scoreList = [89,100,90,98,101];

//方式一:
for(var i=0;i<scoreList.length;i++){
  console.log(i+'=>'+scoreList[i]);
}
console.log("-------------");
//方式二:
//ES5 新语法
for(var i in scoreList){ //遍历出每个下标
   console.log(i+"=>"+scoreList[i]);
}
console.log("-------------");
//方式三:
//ES6 
for(var v of scoreList){ //v 成绩
   console.log(v);
}