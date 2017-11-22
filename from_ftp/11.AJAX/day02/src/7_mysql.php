<?php
  //使用php操作mysql数据库
  //标准语法:
  //1:创建与mysql连接
  //$conn =   mysqli_connect(mysql地址,用户名,密码,库);
  //mysql地址:'127.0.0.1'
  //用户名:'root'
  //密码:''
  //库:'dangdang'
  //2:发送sql给mysql服务器
  //$sql = "INSERT INTO ....";
  //$result = mysqli_query($conn,$sql);
  //3:获取返回结果判断
  //if($result===true)

  //程序
  //1:创建与mysql连接
  $conn = mysqli_connect('127.0.0.1','root',
  '','dangdang');
  //2:发送sql给mysql服务器
  $sql = "INSERT INTO product_type VALUES(10,'mp4',2)";
  $result = mysqli_query($conn,$sql);
  //3:获取返回结果判断
  if($result===true){
   echo '添加记录成功';
  }else{
   echo '添加记录失败';
  }
?>