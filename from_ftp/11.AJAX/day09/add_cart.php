<?php
  //1:修改响应主体类型格式json
  header("Content-Type:application/json;charset=utf-8");
  //2:获取用户提交参数 uid pid
  @$uid = $_REQUEST['uid']or die('{"code":-2,"msg":"用户编号不能为空"}');
  @$pid = $_REQUEST['pid']or die('{"code":-3,"msg":"商品编号不能为空"}');
  //3:创建数据库连接
  //4:设置编码
  require("init.php");
  //5:创建sql 发送sql 查询该用户是否购物过此商品
  $sql = " SELECT * FROM jd_cart";
  $sql .= " WHERE uid=$uid AND pid=$pid";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //6:判断
  //#7 创建变量保存 购物车数量
  $pcount = 1;
  if($row===null){
   $sql = "INSERT INTO jd_cart VALUES(null,$uid,$pid,1)";
   mysqli_query($conn,$sql);
  }else{
   $sql = "UPDATE jd_cart SET pcount=pcount+1";
   $sql .= " WHERE uid=$uid AND pid=$pid";
   mysqli_query($conn,$sql);
   //查询数据库中原先数量 + 1
   $pcount = $row['pcount']+1;
  }
  //7:如果己购买过此商品   sql UPDATE 发送sql
  //8:如果没有购买过此商品 sql INSERT 发送sql
  //9:输出响应内容 code:1 msg"购物成功" count:3
  $output = ["code"=>1,
  "msg"=>"添加成功",
  "pcount"=>$pcount];
  echo json_encode($output);
?>