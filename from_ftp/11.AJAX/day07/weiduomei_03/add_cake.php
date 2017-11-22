<?php
 //1:修改响应主体类型
 header("Content-type:application/json;charset=utf-8");
 //2:获取参数
 @$dname = $_REQUEST['dname']or die('{"code":-2,"msg":"名称是必须的"}');
 @$pic = $_REQUEST['pic']or die('{"code":-3,"msg":"图片是必须的"}');
 @$price = $_REQUEST['price']or die('{"code":-4,"msg":"价格是必须的"}');
 @$tid = $_REQUEST['tid']or die('{"code":-5,"msg":"类别编号是必须的"}');
 //3:创建数据库连接
 //4:设置编码
 require("init.php");
 //5:创建sql语句，并且发送sql
 $sql = "INSERT INTO dm_cake VALUES(null,'$dname',$price,'$pic',$tid)";
 $result = mysqli_query($conn,$sql);
 //6:判断输入结果
 if($result===true){
  echo '{"code":1,"msg":"添加成功"}';
 }else{
  echo '{"code":-1,"msg":"添加失败"}'; 
 }
?>