<?php
  //10:40--10:50
  //1:修改响应主体类型application/json
  header("content-type:application/json;charset=utf-8");
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建SQL语句，并且发送sql
  //  查询dd_book表中所有内容
  $sql = "SELECT * FROM dd_book";
  $result = mysqli_query($conn,$sql);
  //5:抓取所有记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //6:转json字符串  php 函数 json_encode($arr)
  $input = json_encode($rows);
  //7:发送json字符串
  echo($input);
?>