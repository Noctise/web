
//1:等待接收消息
onmessage = function(e){
  console.log("Worker线程接收到数据,开始计算");
  //2:接收数值
  var n = e.data;
  n = parseInt(n);
  //3:累加运算
  var sum = 0;
  for(var i=1;i<=n;i++){
      sum +=i;
  }
  //4:将结果发送UI主线程
  postMessage(sum);

}