<?php
  //删除指定留言 
  //DELETE FROM t_msg WHERE mid=$mid
  //1:获取参数 mid
  @$mid = $_REQUEST['mid']or die('编号是必须的');
  //2:创建数据库连接
  require('init.php');
  //3:创建sql语句并且发送sql
  $sql = "DELETE FROM t_msg WHERE mid=$mid";
  $result = mysqli_query($conn,$sql);
  //4:判断是否删除成功
  if($result){
    echo "删除成功";
  }else{
    echo "删除失败";
  }
?>