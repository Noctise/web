<?php
 //注意事项
 //1:输出关联数组中值
 $book = ['title'=>'三国志'];
 echo $book['title']; //正确
 //echo $book[title]; //错误
 echo "$book[title]"; //正确

 //2:二维数组输出  16:27--16:32
 //保存一组图书信息
 $list = [];
 $list[] = ['id'=>1,"name"=>'js大全'];
 $list[] = ['id'=>2,"name"=>'css大全'];
 $list[] = ['id'=>3,"name"=>'php大全'];
 //var_dump($list);
 //练习1:循环遍历->输出数组中每一个值
 //练习2:输出表格形式  tr td 16:44---16:46
 echo "<table border='1' width='80%'>";
 echo "<tr><td>图书编号</td><td>图书名称</td></tr>";
 foreach($list as $k=>$v){
    echo '<tr><td>'.$v['id'].'</td><td>'.$v['name'].'</td><tr>';
 }
 echo "</table>";
?>