<?php
 //功能:查询 msg->t_msg表
 //将当前内容保存php文件中，使用时加载
 //require()加载函数
 require('init.php');
 //3:创建sql语句,发送sql
 $sql = "SELECT * FROM t_msg";
 $result = mysqli_query($conn,$sql);
 //4:抓取多行记录
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<!doctype html>
<html>
 <head>
   <meta charset="utf-8">
 </head>
  <body>
  <h1>浏览器留言</h1>
  <table border="1" width="90%"> 
  <thead>
    <tr>
	  <td>留言编号</td>
	  <td>留言内容</td>
	  <td>留言时间</td>
	  <td>操作</td>
	</tr>
  </thead>
  <tbody id="tb1">
    <?php
	 foreach($rows as $k=>$v){
		 echo "<tr>";
		 echo "<td>$v[mid]</td>";
		 echo "<td>$v[content]</td>";
		 echo "<td>$v[pubtime]</td>";
		 echo "<td><a class='btn-del' href='$v[mid]'>删除</a></td>";
		 echo "</tr>";
	 } 
	
	?>
  </tbody>
  </table>
 <script>
   //1:获取父元素
   var tb1 = document.getElementById("tb1");
   //2:绑定点击事件
   tb1.addEventListener('click',function(e){
     //3:阻止事件默认行为
     e.preventDefault();
	 //4:判断是否是删除按钮
	 var target = e.target;
	 if(target.className==='btn-del'){
	   //5:获取留言编号
	   var mid = target.getAttribute("href");
	   //6:显示确认框;
	   var rs = window.confirm('您是否要删除该记录');
       if(rs){
	     //7:自动跳转php完成删除操作
		 location.href = 'msg_del.php?mid='+mid;
	   }
	 }
   });
 </script>
 </body>
</html>