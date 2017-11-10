//判断是否引入了jQuery
if(typeof jQuery!=="function")
  throw new Error("myLib函数库依赖于jQuery，必须先引入jQuery")

//向jQuery原型对象中添加自定义方法:
jQuery.fn.sum=function(){
  console.log("调用jQuery中自定义的sum函数");
  //this->将来调用该函数的jQuery对象
  var sum=0;
  this.each((i,elem)=>{
    sum+=parseFloat($(elem).html());
  })
  return sum;
}
