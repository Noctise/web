<?php
 //1:接收客户端提交参数 $_REQUEST 大写
 //  参数:<通常>使用表单,点击'提交'按钮
 //       将标题和新闻内容传递 news_add.php
 //  新闻标题title，新闻内容content
 $title = $_REQUEST['title'];
 $content = $_REQUEST['content'];
 //2:连接数据库
 $conn = mysqli_connect('127.0.0.1','root','','ifeng');
 //3:发送INSERT
 $sql = "INSERT INTO t_news VALUES(null,'$title','$content',now(),0)";
 $result = mysqli_query($conn,$sql);
 //4:判断输出添加成功
 if($result===true){
   echo "添加成功";
 }else{
   echo "添加失败";
 }

 //检测
 //http://127.0.0.1/web1703/day03/ifeng/news_add.php?title=hi&content=hihi
?>