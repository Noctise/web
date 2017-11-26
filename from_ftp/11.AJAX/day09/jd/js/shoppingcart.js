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
<td><a href="${obj.cid}" class='btn-del'>删除</a></td>
</tr>
      `;//16:40---16:55 删除功能 
     }
     //5:保存
     $("#cart tbody").html(html);
  }
});

//3:获取返回结果
//4:拼接保存      30-43  tbody


//模块三:为删除按钮绑定事件监听
//       实现购物车项目删除
//17:30---17:40
//1:获取删除按钮
$("#cart tbody").on("click","a.btn-del",
  function(e){
//2:为其绑定点击事件--事件代理
//3:阻止事件默认行为
e.preventDefault();
//4:获取当前购物项id
var cid = $(this).attr("href");
//5:?预留this
var self = this;//self<===>a
//6:发送ajax请求  data/cartdel.php
$.ajax({
  url:"data/cartdel.php",
  data:{cid:cid},
  success:function(data){
    if(data.code>0){
      alert("删除成功");
      // a     td       tr
      $(self).parent().parent().remove();
    }else{
      alert("删除失败"+data.msg);
    }
  }
});
//7:将当前购物项编号 cid
//8:如果删除成功  将当前元素a td tr 删除 
});
  




});