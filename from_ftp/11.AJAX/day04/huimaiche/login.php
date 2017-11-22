<?php
  //功能:完成用户登录
  //1:获取用户参数 uname upwd
  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$upwd = $_REQUEST['upwd']or die('密码是必须的');
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建SQL语句，发送SQL??
  $sql = "SELECT * FROM user WHERE uname='$uname'  AND upwd='$upwd'";
  //5:抓取一条记录
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断是否登录成功
  if($row===null){
    echo "登录失败";
  }else{
    echo "登录成功";
  }
  //mysqli_fetch_assoc() 
  //expects parameter 1 to be mysqli_result, //boolean given
  //以上错误二个
  //1:连接数据库错误 init.php
  //2:sql语句写法    echo $sql;

?>