<?php
 //查看php解析器版本及相关信息
 //phpinfo();

 //php 中数组
 //1: 数组声明 
 $arr1 = array(10,20,50,100,90);//php 5.3-
 $arr2 = [10,30,50];            //php 5.4+
 //echo $arr1; 数组不能用echo输出
 //echo 只能输出 数值  字符串
 //var_dump($arr1);//查看数组的类型和每个元素值
 //数组的种类
 //1:索引数组:每个元素的下标是数字
 //2:关联数组:每个元素的下标字符串
 $arr1 = [101,'tom',3500];
 $arr1[3] = '13999999999';//在数组尾部添加新元素
 $arr1[] = 'beijing';//在数组尾部添加新元素
 //var_dump($arr1);
 echo count($arr1);//计算数组元素的个数
 //关联数组
 $arr2 = ['id'=>1,'name'=>'tom','age'=>20];
 //var_dump($arr2);//15:50--15:55
 //练习1:循环遍历输出$arr1数组中每个元素
 echo "<hr />";
 for($i=0;$i<count($arr1);$i++){
    echo $arr1[$i].':';
 }
 echo "<hr/>";
 //练习2:循环遍历输出$arr2数组中每个元素
 foreach($arr2 as $k=>$v){
     echo $k.'='.$v.' ';
 }
 echo "<hr/>";
 foreach($arr1 as $k=>$v){
     echo $k.'='.$v.' ';
 }

?>