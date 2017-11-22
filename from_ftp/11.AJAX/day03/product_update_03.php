<?php
 //1:获取参数:商品编号
 $id = $_REQUEST['id'];
 //2:创建数据连接
 $conn = mysqli_connect('127.0.0.1','root','','dangdang');
 //3:创建sql更新，并且发送sql
 $sql = "UPDATE product SET price=price*1.1 WHERE id=$id";
 $result = mysqli_query($conn,$sql);
 //4:判断输出
 if($result===true){
   echo "更新成功";
 }else{
   echo "更新失败";
 }
?>