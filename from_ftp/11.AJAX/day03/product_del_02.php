<?php
 //1:获取指定参数->产品编号id
 $id = $_REQUEST['id'];
 //2:创建与数据库连接
 $conn = mysqli_connect('127.0.0.1','root','','dangdang');
 //3:创建删除sql语句,并且发送sql
 $sql = "DELETE FROM product_type+ WHERE id=$id";
 $result = mysqli_query($conn,$sql);
 //4:判断是否删除成功
 if($result===true){
   echo "删除成功";
 }else{
   echo "删除失败";
 }
 //如果'删除失败'原因
 //1:连接数据库不存在，库中没有表 10%
 //2:sql写错了  90%  echo $sql
?>