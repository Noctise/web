<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/20 0020
 * Time: 15:08
 */

@$uname = $_REQUEST['uname'] or die('neccessery');
@$upwd = $_REQUEST['upwd'] or die('cant empty');

require ('init.php');

$sql = "insert into USER VALUES (null,'$uname','$upwd')";
$result = mysqli_query($conn,$sql);

if($result){
    echo "succeed";
}else{
    echo "fault";
}

?>
