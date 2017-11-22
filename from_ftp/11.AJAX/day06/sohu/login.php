<?php
  //1:获取参数 uname upwd
  @$uname = $_REQUEST["uname"]or die("用户名是必须的");
  @$upwd = $_REQUEST["upwd"]or die("密码是必须的");
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建sql,并且发送sql
  $sql = "SELECT * FROM user WHERE ";
  $sql .= " uname='$uname' AND upwd='$upwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //5:判断 
  if($row===null){
     echo "login-err";
  }else{
     echo "login-succ";
  }
  //6:返回值 login-succ  login-err
?>