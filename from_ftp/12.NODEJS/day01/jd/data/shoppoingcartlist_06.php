<?php
//14:20--14:30
//1:修改响应格式json
header("content-type:application/json;charset=utf-8");
//2:获取参数 uid
@$uid = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空"}');
//3:创建数据库连接 设置编码
require("init.php");
//4:创建sql 多表 购物车表/产品表
$sql  = " SELECT c.cid,p.pic,p.pname,p.price,";
$sql .=" c.count,p.pid ";
$sql .=" FROM t_cart c,jd_product p";
$sql .=" WHERE c.pid = p.pid";
$sql .=" AND c.uid = $uid";
//5:抓取多条记录 
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//6:转换json
$str = json_encode($rows);
//7:发送json字符串
echo $str;
?>