<?php
//功能:计算产品总页数17:40--17:50  
//1:修改响应主体内容格式!!!!!
header("Content-Type:application/json;charset=utf-8");
//2:创建数据库连接
//3:设置编码
require("init.php");
//4:创建SQL语句，并且发送sql  ;总记录数36
$sql = "SELECT count(*) FROM jd_product";
$result = mysqli_query($conn,$sql);
//5:获取返回结果
$row = mysqli_fetch_row($result);
//echo $row[0];   36/8 向上取整 ceil(); intval()
//6:计算
$num = ceil(intval($row[0])/8);
//7:输出总页数 '{"page":5}'
$output = ["page"=>$num];
echo json_encode($output);
?>