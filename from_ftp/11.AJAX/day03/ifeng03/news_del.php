<?php
//1:接收客户提交新闻的编号(参数) 
  $nid = $_REQUEST['nid'];
//2:连接数据库，
  $conn = mysqli_connect('127.0.0.1','root','','ifeng'); 
//3:提交delete语句，
  $sql = "DELETE FROM t_news WHERE nid=$nid";
  $result = mysqli_query($conn,$sql);
//4:输出成功
  if($result===true){
    echo "删除成功";
  }else{
    echo "删除失败";
  }
  //http://127.0.0.1/web1703/day03/ifeng02/news_del.php?nid=1
?>