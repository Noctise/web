<?php
 header("Content-Type:application/javascript;charset=utf-8");
 $json = '{"ename":"tom"}';   //json单引号双引不错
 echo 'doResponse('.$json.');';//js函数调用
?>