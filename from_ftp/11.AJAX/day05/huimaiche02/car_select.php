<?php
  //1:获取参数
  //2:创建数据库连接
  //3:设置编码
  require("init.php");
  //4:创建sql语句并且发送sql
  $sql = "SELECT * FROM car";
  $result = mysqli_query($conn,$sql);
  //5:抓取多行记录
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<!doctype html>
<html>
 <head>
   <meta charset="utf-8">
 </head>
  <body>
  <h1>汽车列表</h1>
  <table border="1" width="90%">
   <thead>
     <tr>
     <td>汽车图片</td>
     <td>汽车名称</td>
     <td>汽车价格</td>
     <td>汽车类别</td>
     <td>操作</td>
     </tr>
   </thead>
   <tbody id="tb1">
     <?php
       foreach($rows as $k=>$v){
		   echo "<tr>";
		   echo "<td><img width='100' height='100' src='img/$v[pic]' /></td>";
		   echo "<td>$v[cname]</td>";
		   echo "<td>$v[price]</td>";
		   echo "<td>$v[type]</td>";
		   echo "<td><a href='$v[cid]' class='btn-del'>删除</a></td>";
		   echo "</tr>";
	   }
	 ?>
   </tbody>
  </table>
  <script>
    //1:获取父元素
	//2:为其绑定点击事件
    tb1.onclick = function(e){
		//3:阻止事件默认行为
		e.preventDefault();
		//4:判断是否是删除按钮
		var target = e.target;
		if(target.className==='btn-del'){
			//5:获取当前汽车编号
            var cid = target.getAttribute("href");
			//6:确认
			var rs = window.confirm('确认要删除该记录吗?');
            if(rs){
			   location.href = 'car_del.php?cid='+cid;
			}
		}
	}
  </script>
 </body>
</html>