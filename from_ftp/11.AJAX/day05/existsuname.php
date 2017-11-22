<?php
  //1:获取参数 uname
  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建SQL，并且发送sql
  $sql = "SELECT * FROM user WHERE uname='$uname'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //5:判断
  if($row!==null){
    echo "该用户名己存在";
  }else{
    echo "该用户名可以使用";
  }
?>