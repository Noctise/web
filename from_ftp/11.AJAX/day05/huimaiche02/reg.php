<?php
 //15:41--15:46 完成下列功能
 //功能:获取用户提交参数(用户名/密码)
 //     添加数据库
 @$uname = $_REQUEST['uname']or die('用户名是必须的');
 @$upwd = $_REQUEST['upwd']or die('密码是必须的');
 //1:获取参数 uname upwd
 //2:创建数据库连接  init.php
 //3:设置编码
 require('init.php');
 //4:创建添加sql,发送sql
 //5:判断用户注册是否成功
 $sql = "INSERT INTO user VALUES(null,'$uname','$upwd')";
 $result = mysqli_query($conn,$sql);
 if($result===true){
  echo "注册成功";
 }else{
  echo "注册失败";
 }

?>