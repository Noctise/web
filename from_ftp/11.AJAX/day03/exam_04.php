<?php
  echo "1<br/>";
  //die('程序出错了:)');
  echo "2<br/>";
  echo "3<br/>";
  echo time();//1496304597  秒数1970-1-1
  //@$id = $_REQUEST['id'] or die("系统正在升级，请您稍候再试");
  $conn = mysqli_connect('127.0.0.1','root','','ifeng');
  $sql = "INSERT INTO t_news VALUES(null,'11','11',now(),0)";
  $result = mysqli_query($conn,$sql);
  //1:获取新添加记录自增id
  $id = mysqli_insert_id($conn);
  echo '新添加id值:'.$id.'<br />';
  //2:获取添加操作影响几行
  $num = mysqli_affected_rows($conn);
  echo '影响行数:'.$num;
  
?>