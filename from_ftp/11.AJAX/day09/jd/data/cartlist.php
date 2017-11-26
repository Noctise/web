<?php
 //1:修改响应主体内容格式 json
 header("Content-Type:application/json;charset=utf-8");
 //2:获取参数  uid
 @$uid = $_REQUEST['uid']or die('{"code":-1,"msg":"用户编号是必须的"}');
 //3:创建数据库连接
 //4:设置编码
 require("init.php");
 //5:创建sql语句，并且发送
 $sql = " SELECT c.cid,p.pname,p.price,";
 $sql .=" c.pcount,p.pic";
 $sql .=" from jd_cart c,jd_product p";
 $sql .=" where c.pid=p.pid";
 $sql .=" AND c.uid = $uid";
 $result = mysqli_query($conn,$sql);
 //6:抓取多行记录
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //7:输出
 echo json_encode($rows);
?>