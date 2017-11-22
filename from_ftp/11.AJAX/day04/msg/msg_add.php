<?php
  //uname/phone/content
  //1:接收客户端传递三个参数
  @$uname = $_REQUEST['uname']or die('用户名是必须的');
  @$phone = $_REQUEST['phone']or die('电话是必须的');
  @$content = $_REQUEST['content']or die('内容是必须的');
  //2:创建连接
  $conn = mysqli_connect('127.0.0.1','root','','msg');
  //3:设置编码
  mysqli_query($conn,"SET NAMES UTF8");
  //4:创建sql语句，并且发送sql
  $sql = "INSERT INTO t_msg VALUES(null,'$uname',$phone,now(),'$content')";
  $result = mysqli_query($conn,$sql);
  //5:判断返回结果
  if($result===true){
    echo "发表留言成功";
  }else{
    echo "发表留言失败";
  }
?>
