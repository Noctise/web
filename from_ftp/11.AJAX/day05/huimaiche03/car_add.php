<?php
//1:获取参数[cname/pic/price/type]
@$cname = $_REQUEST['cname']or die('汽车名是必须的');
@$pic = $_REQUEST['pic']or die("图片是必须的");
@$price = $_REQUEST['price']or die("价格是必须的");
@$type = $_REQUEST['type']or die("类型是必须的");
//2:连接数据库
//3:设置编码
require("init.php");
//4:创建sql语句 INSERT 并且发送sql
$sql = "INSERT INTO car VALUES(null,'$cname','$pic',$price,now(),'$type')";
$result = mysqli_query($conn,$sql);
//5:判断
if($result===true){
 echo "添加成功";
}else{
 echo "添加失败";
}


//submit 按钮:提交按钮
//提交:一个操作,将表单中数据发送action指定程序
//     car_add.php



?>