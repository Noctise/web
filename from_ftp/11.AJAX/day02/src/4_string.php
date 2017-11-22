<?php
 //php 中string 字符串
 //单引号括起字符 或者 双引号括字符都是字符串
 $str = 10.50;
 //小函数:查看变量的值与类型 var_dump($str);
 var_dump($str);
 $str = "10.50";
 var_dump($str);
 //单引号与双引号..区别 15:31--15:33
 //1:单引号字符串不能解析字符串中变量
 //2:双引号字符串可以解析字符串中变量
 $ename = 'tom';
 $age = 20;
 echo '姓名:$ename 年龄:$age <br />';
 echo '姓名:'.$ename.'年龄'.$age.'<br />';
 echo "姓名:$ename 年龄:$age <br />";

 phpinfo();
?>