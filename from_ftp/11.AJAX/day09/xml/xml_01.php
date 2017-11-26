<?php
 //功能:通过程序xml文档并且发送
 //1:修改响应主体类型 xml
 header("Content-Type:application/xml;charset=utf-8");
 //2:输出xml声明
 echo "<?xml version='1.0' encoding='utf-8'?>";
 //3:输出book开始->根元素
 echo "<book>";
 //4:输出name开始name结束 中间添加书名
 echo "<name>java</name>";
 //5:输出book结束
 echo "</book>";
?>