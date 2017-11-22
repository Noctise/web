<!doctype html>
<html>
 <head>
   <meta charset="utf-8">
 </head>
 <body>
    <h1>2.php</h1>
	<h2>动态网页</h2>
	<?php
     //1:乱码: 保存3.php 使用gbk==ANSI
	 //                  显示utf-8
	 //2:找不到程序 Not Found
	 //c:/xmapp/1.php 
	 //3:语法

//
//1:创建3.php 使用php向客户端输出 1个*
$i='*';
echo($i);
echo('*');
echo('<hr/>');
//2:创建4.php 使用php向客户端输出 50个*
for($i=0;$i<50;$i++){
	echo('*');
}
echo "<hr />";//14:55--15:00
//3:创建5.php 使用php向客户端输出 5行10列*
//#外层循环变量i控制行数 内层j控制列数
for($i=0;$i<5;$i++){
	//3.1:输出10*
	for($j=0;$j<10;$j++){
	  echo ('*');
	}
	//3.2:输出换行 <br />
	echo '<br />';
}
echo "<hr />";
//4:创建6.php 使用php向客户端输出 九九乘法表
for($i=1;$i<=9;$i++){
	for($j=1;$j<=$i;$j++){
	   echo $j.'*'.$i.'='.($j*$i).'&nbsp';
	}
	echo('<br />');
}
?>
 </body>
</html>