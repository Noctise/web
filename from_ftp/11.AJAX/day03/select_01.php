<?php
 //查询数据库中一行记录
 //库:dangdang 表:product
 //10:50--10:55 万寿路设备故障稍等
 //1:创建数据库连接
 $conn = mysqli_connect('127.0.0.1','root','','dangdang');
 //?2:设置操作编码 utf8
 mysqli_query($conn,"SET NAMES UTF8");
 //3:创建sql查询所有product表记录
 $sql = "SELECT * FROM product_type";
 //4:发送sql获取结果集对象
 $result = mysqli_query($conn,$sql);
 //?5:抓取一行->单向抓取
 //$row = mysqli_fetch_assoc($result);
 //$row = mysqli_fetch_row($result);
 //6:抓取多行记录
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //练习:查询product所有记录
 //输出表格形式 11:30--11:408
?>
<table border="1" width="80%">
  <thead>
    <tr>
	  <td>产品编号</td>
	  <td>产品名称</td>
	  <td>操作</td>
	</tr>
  </thead>
  <tbody id="tb1">
   <?php
    foreach($rows as $k=>$v){
		echo "<tr>";
		echo "<td>$v[id]</td>";
		echo "<td>$v[name]</td>";
		echo "<td>
		<a class='btn-del' href='$v[id]'>删除</a>
		<a class='btn-update' href='$v[id]'>更新价格</a>
		</td>";
		echo "</tr>";
	}
   ?>
  </tbody>
</table>
<script>
  //1(js):获取所删除按钮
  //a:获取表格tbody元素(父元素，利用冒泡机制)
  var tb1 = document.getElementById("tb1");
  //b:绑定点击事件
  tb1.onclick = function(e){
   var target = e.target;
   //c:如果当前事件目标对象是删除按钮
   if(target.className==='btn-del'){
    //d:阻止事件默认行为(自动跳转)
    e.preventDefault();
    //e:获取当前a元素属性值 href(当前商品编号)
	var id = target.getAttribute("href");
	//f:显示一个确认框
	var rs = window.confirm('您确认要删除该商品吗?');
    //g:判断如果用户点击 '是' rs===true
    if(rs){
	  //i:自动跳转php product_del.php?id=
	  location.href = 'product_del_02.php?id='+id;
	}
   }
  }
  //:练习:更新价格 10%  14:57--15:07
  //1:(php)product_update_03.php
  // 获取更新商品编号
  // 更新价格涨10%
  //更新成功
  //2:(js)绑定点击事件 "更新价格"
  // 显示确认框 "是否更新该商品价格";
  // 是         "自动跳转product_update.php?id=1"
  //1:获取父元素
  var tb11 = document.getElementById("tb1");
  tb11.addEventListener('click',function(e){
    //3:阻止事件默认行为
	e.preventDefault();
	//4:获取目标对象
	var target = e.target;
	//5:判断当前按钮是否是删除按钮
	if(target.className==='btn-update'){
	  //6:获取商品编号
	  var id = target.getAttribute("href");
	  //7:显示确认框
	  var rs = window.confirm('您是否要更新数据?');
	  //8:如果用户点击 “是”
      if(rs){
	    location.href = 'product_update_03.php?id='+id;
	  }
	  //9:自动跳转 product_update_03.php?id=
	}  
  })



</script>