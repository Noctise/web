<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/16 0016
 * Time: 14:24
 */
$name = $_REQUEST['name'];
$tcont = $_REQUEST['tcount'];

$conn=mysqli_connect('127.0.0.1','root','','dangdang');
$sql="insert into product_type VALUE (11,'$name',$tcont)";
$result = mysqli_query($conn,$sql);

