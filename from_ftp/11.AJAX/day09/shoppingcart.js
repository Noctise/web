//功能一:页面加载完成后请求
//       header.php
//       footer.php
$(function(){
  $("#header").load("data/header.php");
  $("#footer").load("data/footer.php");



//功能二:页面加载完成后，异步请求当前登录
//       用户购物车中商品列表
var uid = 1;
//1:页面加载事件
//2:发送ajax请求 data/cartlist.php
$.ajax({
  url:"data/cartlist.php",
  data:{uid:uid},
  success:function(data){//json
     //1:创建空字符串
     var html = "";
     //2:循环
     for(var i=0;i<data.length;i++){
      //3:获取当前对象
      var obj = data[i];
      //4:拼接字符串
      html += `
<tr>
<td>
<input type="checkbox"/>
<input type="hidden" value="1" />
<div><img src="${obj.pic}" alt=""/></div>
</td>
<td><a href="">${obj.pname}</a></td>
<td>${obj.price}</td>
<td>
<button class="${obj.cid}">-</button>
<input type="text" value="${obj.pcount}"/>
<button class="${obj.cid}">+</button>
</td>
<td><span>${obj.price*obj.pcount}</span></td>
<td><a href="${obj.cid}">删除</a></td>
</tr>
     
      `;
     }
     //5:保存
     $("#cart tbody").html(html);
  }
});

//3:获取返回结果
//4:拼接保存      30-43  tbody
});