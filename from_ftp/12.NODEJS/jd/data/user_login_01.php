<?php
  header("content-type:application/json;charset=utf-8");   //15:20--15:30
  //1:获取参数uname upwd
  @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名是必须的"}');
  @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码是必须的"}');
  //2:连接数据库 设置编码
  require("init.php");
  //3:创建sql    发送 sql
  $sql = " SELECT * FROM jd_user";
  $sql .= " WHERE uname='$uname'";
  $sql .= " AND upwd = '$upwd'";
  //4:抓取一行记录
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //5:判断输出最终结果 code uid uname ?
  if($row===NULL){
    echo '{"code":-1,"msg":"用户名或密码有误"}';
  }else{
    //code 1  uid 1  uname qd
	$uid = $row['uid'];
	$uname = $row['uname'];
    //创建关联数组-->json字符串
	$output = [
	 "code"=>1,
	 "uid"=>$uid,
	 "uname"=>$uname
	];
    echo json_encode($output);
  }
?>