<?php
  //1:获取参数 uname upwd
  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$upwd = $_REQUEST['upwd']or die('密码是必须的');
  //2:创建与数据库连接
  //3:设置编码
  require("init.php");
  //4:创建sql并且发送结果 INSERT ...
  $sql = "INSERT INTO user VALUES(null,'$uname','$upwd')";
  $result = mysqli_query($conn,$sql);
  //5:判断并且返回成功或者失败
  if($result===true){
    echo "添加成功";
  }else{
    echo "添加失败";
  }
?>