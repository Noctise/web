<?php
  //1:获取参数返回值数值
  //die("-2");
  //第一个功能:停止当前php执行
  //第二个功能:输出 -2 
  @$bname = $_REQUEST['bname']or die('-2');
  @$pic = $_REQUEST['pic']or die('-3');
  @$price = $_REQUEST['price']or die('-4');
  @$pubdate = $_REQUEST['pubdate']or die('-5');
  //2:创建一个数据库连接
  //3:设置编码
  require("init.php");
  //4:创建sql语句，并且发送
  $sql = "INSERT INTO dd_book VALUES(null,'$bname','$pic',$price,'$pubdate')";//14:14--14:19
  $result = mysqli_query($conn,$sql);
  //5:判断 sql 出错 -1
  //           正确 返回当前记录id
  if($result===false){
    echo '-1';
  }else{
    $id = mysqli_insert_id($conn);
	echo $id;
  }
?>