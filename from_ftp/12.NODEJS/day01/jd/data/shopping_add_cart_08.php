<?php
//1:修改响应头格式json
header("content-type:application/json;charset=utf-8");
//2:获取参数  cid
@$cid = $_REQUEST['cid']or die('{"code":-2,"msg":"购物车编码是必须的"}');
//3:连接数据 设置编码
require("init.php");
//4:创建sql  发送sql
$sql = "UPDATE t_cart SET count=count+1";
$sql .= " WHERE cid=$cid";
$result = mysqli_query($conn,$sql);
//5:判断输出返回结果
if($result===true){
 echo '{"code":1,"msg":"修改成功"}';
}