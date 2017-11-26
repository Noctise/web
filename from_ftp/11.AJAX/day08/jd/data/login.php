<?php
  //*1:修改响应主体内容格式 json
  header("Content-Type:application/json;charset=utf-8");
  //*2:获取参数 uname upwd
  @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名不以为空"}');
  @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码不以为空"}');
  //*3:创建数据库连接
  //*4:设置编码
  require("init.php");
  //*5:创建sql语句，并且发送
  $sql = " SELECT uid FROM jd_user WHERE";
  $sql .= " uname='$uname' AND upwd='$upwd'";
  $result = mysqli_query($conn,$sql);
  //#注意：抓取一行记录  
  $rows = mysqli_fetch_assoc($result);
  //6:判断并且将结果输出
  if($rows===null){
    echo '{"code":-1,"msg":"用户名或密码错误"}';
  }else{
    //6.1:获取uid
	$uid = $rows['uid'];
	//6.2:创建关联数组  5.6
	$output = ["code"=>1,"msg"=>"登录成功",
		"uname"=>$uname,"uid"=>$uid];
    //6.3:转换json输出
	echo json_encode($output);
  }
?>