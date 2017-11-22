<?php
 //0:设置响应主体类型 text/html(默认类型)
 header('Content-Type:text/html;charset=utf-8');
 //1:获取用户提交参数 kw
 @$kw = $_REQUEST['kw']or die('<li>关键字不存在</li>');
 //2:创建数据库连接
 //3:设置编码
 require('init.php');
 //4:创建sql并且发送sql
 $sql = "SELECT * FROM dd_book WHERE bname LIKE '%$kw%'";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //5:抓取多行记录
 //6:输出
 if($rows === null){
   echo "<li>没有匹配的记录</li>";
 }else{
   foreach($rows as $k=>$v){
     echo "<li>$v[bname]</li>";
   }
 }
?>