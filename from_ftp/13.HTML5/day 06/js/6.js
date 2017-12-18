
onmessage = function(e){
   console.log("worker线程接收到了消息");
   var num = e.data;
   num = parseInt(num);
   var rs = isPrime(num);
   console.log(rs);
}


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
