<?php
 //16:50--17:00
 //1:修改响应头格式json
 //2:创建数据库连接 设置编码
 header("content-type:application/json;charset=utf-8");
 require("init.php");
 //3:创建sql  发送sql
 //3.1:获取用户提交参数 9:30--9:35
 @$pageNo = $_REQUEST['pageNo'];
 if($pageNo===NULL){
    $pageNo = 1;
 }
 //3.2:计算查询偏移量
 $offset = ($pageNo-1)*8;
 $sql = "SELECT * FROM jd_product limit $offset,8";
 //4:抓取多行记录
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //5:转换json
 $str = json_encode($rows);
 //6:发送
 echo $str;
?>