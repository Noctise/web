<?php
  //1:获取用户9.html提交参数
             //$_XX  php预定义变量
  //$_REQUEST  //数组->保存所有用户提交参数
  //var_dump($_REQUEST);
  $name = $_REQUEST['name'];//保存图书名称
  $tcount = $_REQUEST['tcount'];//保存数量
  //2:连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','dangdang');
  //3:发送sql语句
  $sql = "INSERT INTO product_type VALUES(11,'$name',$tcount)";
  $result = mysqli_query($conn,$sql);
  //4:获取返回结果
  if($result===true){
    echo "添加记录成功";
  }else{
    echo "添加失败";
  }
?>