<?php
  //1.1:接收客户端传送参数 tid 类别编号
  //1.2:查询数据库中指定类别编号下所有蛋糕
  //1.3:返回json
  //1:设置响应主体类型格式
  header("Content-Type:application/json;charset=utf-8");
  //2:接收客户端参数tid
  @$tid = $_REQUEST['tid']or die('{"code":-2,"msg":"类别编号是必须的"}');
  //3:连接数据库
  //4:设置编码
  require("init.php");
  //5:创建sql语句并且发送sql
  $sql = "SELECT * FROM dm_cake WHERE tid=$tid";
  $result = mysqli_query($conn,$sql);
  //6:抓取多行记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  //7:转换json
  $input = json_encode($rows);
  //8:输出值
  echo $input;
?>