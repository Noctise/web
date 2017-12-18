<?php
 //查询计算总页数 9:40---9:50
 header("content-type:application/json;charset=utf-8");
 require("init.php");
 //:查询总记录数
 $sql = "SELECT count(pid) FROM jd_product";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_row($result);
 $page = ceil($row[0]/8);
 $str = ["page"=>$page];
 //:2依据总记录数算总页
 // '{"page":5}'
 echo json_encode($str);
?>