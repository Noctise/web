var num = 999999999;
var rs = isPrime(num);
postMessage(num+":是质数吗?"+rs);

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
