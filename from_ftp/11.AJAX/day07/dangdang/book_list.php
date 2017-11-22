<?php
//功能:查询dd_book表中所有记录
//并且转换html 输出 17:31--17:40
//0:设置响应主体内容格式text/html
header("Content-Type:text/html;charset=utf-8");
//1:创建数据库连接
//2:设置编码
require("init.php");
//3:创建查询SQL语句，并且发送
$sql = "SELECT * FROM dd_book";
//4:抓取所有记录
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//5:循环记录内容，输出 
//<tr><td>js大全</td><td>100</td></tr>
foreach($rows as $k=>$v){
 echo "<tr>";
 echo "<td>$v[bname]</td>";
 echo "<td>$v[price]</td>";
 echo "<td><a href='$v[bid]' class='btn-del'>删除</a></td>";
 echo "</tr>";
}

?>