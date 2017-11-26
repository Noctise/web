<?php
  //1:修改响应主体类型
  header("Content-Type:application/json;charset=utf-8");
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建sql语句，并且发送sql
  $sql = "SELECT * FROM jd_product LIMIT 0,8";
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //5:抓取多行记录
  //6:输出json
  $input = json_encode($rows);
  echo $input;
?>