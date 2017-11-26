<?php
//1:修改响应主体类型json
header("Content-type:application/json;charset=utf-8");
//2:获取参数 cid 购物车编号
@$cid = $_REQUEST['cid']or die('{"code":-1,"msg":"购物车编号是必须的"}');
//3:创建数据库连接
//4:设置编码
require("init.php");
//5:创建sql[DELETE] 并且发送sql
$sql = "DELETE FROM jd_cart WHERE cid=$cid";
$result = mysqli_query($conn,$sql);
//6:返回删除成功消息 code:1 msg:删除成功
echo '{"code":1,"msg":"删除成功"}';