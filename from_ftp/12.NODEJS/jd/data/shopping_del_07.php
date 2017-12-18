<?php
 //功能：删除购物车中选项
 //9:30--9:40   
 //1:修改响应头格式
 //2:获取参数 cid
 header("content-type:application/json;charset=utf-8");
 @$cid = $_REQUEST['cid']or die('{"code":-2,"msg":"删除编号不能为空"}');
 //3:连接数据库 设置编码
 require("init.php");
 //4:创建 sql DELETE FROM t_cart WHERE cid = //$cid;
 //5:发送sql
 $sql = "DELETE FROM t_cart WHERE cid = $cid";
 $result = mysqli_query($conn,$sql);
 if($result===true){
   echo '{"code":1,"msg":"删除成功"}';
 }
 //6:判断是否删除成功  '{"code":1,"msg":"删除成
 //功"}'
?>