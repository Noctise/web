<?php
  //1:获取参数汽车编号
  @$cid = $_REQUEST['cid']or die('汽车编号是必须的');
  //2:创建数据库连接
  //3:设置编码
  require('init.php');
  //4:创建SQL[DELETE FROM car WHERE cid=],
  //  并且发送sql
  $sql = "DELETE FROM car WHERE cid=$cid";
  $result = mysqli_query($conn,$sql);
  //5:判断
  if($result===true){
   echo "删除成功";
  }else{
   echo "删除失败";
  }
?>