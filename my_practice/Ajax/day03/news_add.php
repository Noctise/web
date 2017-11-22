<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/16 0016
 * Time: 15:38
 */
$title = $_REQUEST['title'];
$content = $_REQUEST['content'];

$conn = mysqli_connect('127.0.0.1','root','','ifeng');

$sql = "insert into t_news VALUES(NULL ,'$title','$content',now(),0)";

$result = mysqli_query($conn,$sql);

if ($result == true){
    echo 'succeed';
}else{
    echo 'defeat';
}


?>
