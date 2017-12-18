var num = 999999999;

//注意事项:time(字符串1)
//与      timeEnd(字符串2)
// 字符串1===字符串2  相等才能正确计算时间
console.time("质数计算");//计算时间开始..质数计算
var rs = isPrime(num);
console.timeEnd("质数计算");//计算时间结束..质数计算

console.log(num+"是质数吗?"+rs);

//功能:判断传入参数 num
//是否为质数
//如果num为质数返回   true
//如果num不为质数返回 false
function isPrime(num){
  //通用写法--让程暂停5s
  var start = new Date().getTime();
  do{
    var now = new Date().getTime();
  }while(now-start<=5000);

  for(var i=2;i<num;i++){
    if(num%i==0){
      break;
    }
  }//end for
  if(i<num){
    return false;//不是
  }else{
    return true;//是质数
  }
}
