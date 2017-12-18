<?php
  //功能:添加购物车
  //1:修改响应头格式json
  //2:获取用户提交参数 uid(用户id) pid(产品id)
  header("content-type:application/json;charset=utf-8");
  @$uid = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号是必须的"}');
  @$pid = $_REQUEST['pid'] or die('{"code":-3,"msg":"产品编号是必须的"}');
  //5:创建连接 设置编号
  require("init.php");
  //6:查询uid pid 条件记录
  //  SELECT * FROM t_cart WHERE uid = ? and pid=?
  $sql = "SELECT * FROM t_cart";
  $sql .= " WHERE uid = $uid AND ";
  $sql .= " pid = $pid";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);

  if($row===null){
   $count = 1;
   $sql = "INSERT INTO t_cart VALUES(null,$uid,$pid,1)";
  }else{
   $sql = "UPDATE t_cart SET count=count+1";
   $sql .= " WHERE uid=$uid AND pid=$pid";
   $count = $row['count']+1;
  }
  mysqli_query($conn,$sql);
  $arr = ["code"=>1,"count"=>$count];
  echo json_encode($arr);
?>