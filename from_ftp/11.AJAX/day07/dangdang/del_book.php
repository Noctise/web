<?php
 //功能:获取参数bid删除指定记录
 //1:获取参数 bid
 @$bid = $_REQUEST["bid"]or die("-2");
 //2:创建数据库连接
 //3:设置编码
 require("init.php");
 //4:创建sql语句，并且发送sql
 $sql = "DELETE FROM dd_book WHERE bid=$bid";
 $result = mysqli_query($conn,$sql);
 //5:判断删除是否成功
 if($result===false){
   echo "-1";
 }else{
   echo "1";
 }
?>