$(function(){

//功能1：读取上一页面保存 cookie
//用户名和用户编号
//解析uid和uname若没有则必须跳回"登录页面"
//1:读取cookie所有数据以; 拆分为数组
//  [loginUid=1][loginUname=qd]
  var cookieArray = document.cookie.split("; ");
//2:创建空对象
  var cookieObject = {};
//3:循环获取数组中每一个键和值 
  for(var i=0;i<cookieArray.length;i++){
    var pair = cookieArray[i].split("=");
    var key = pair[0];//loginUname
    var val = pair[1];//qd
    cookieObject[key]=val;
  }
//4:保存在对象中
//5:循环外
//  如果当前对象中没有uid跳转登录页面
if(!cookieObject.loginUid){
  location.href = "productlist.html";
}



//14:50--15:00
//功能3：页面加载完成后，异步请求
//当前登录用户购物车中商品信息
//data/shoppoingcartlist_06.php
//参数 uid = 1
//返回json-->js 对象
//拼接字符串 #cart tbody tr->tr->tr
$.ajax({
  url:'data/shoppoingcartlist_06.php',
  data:{uid:cookieObject.loginUid},
  success:function(data){
    //#拼字符串
    //1:创建变量html =""
    var html = "";
    //2:循环拼接所有标签
    $.each(data,function(i,obj){
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
<input type="text" value="${obj.count}"/>
<button class="${obj.cid}">+</button>
</td>
<td><span>${obj.price*obj.count}</span></td>
<td><a href="${obj.cid}" class="btn-delete">删除</a></td>
</tr>

        `;
    });
    //3:循环外将html赋值,tbody
    $("#cart tbody").html(html);

  }
});




//模块四:为删除按钮绑定事件监听
//实现删除购物车选项功能
//9:48--9:52
//*1:绑定事件 购物车选项中删除按钮
//  事件代理
//*2:阻止事件默认行为
//*3:获取当前购物车项id
$("#cart tbody").on("click"
,"a:contains('删除')",
  function(e){
  e.preventDefault();
  var cid = $(this).attr("href");
//4:发送ajax请求 shopping_del_07.php
  //预留this
  var self = this;

  $.ajax({
      url:"data/shopping_del_07.php",
      data:{cid:cid},
      success:function(data){
        if(data.code<0){
           alert("删除失败:"+data.msg);
        }else{
           alert("删除成功");
           $(self).parent().parent().remove();
        }
      }
  });
//5:如果返回成功->tr 删除
})




//模块五:为 + 按钮绑定事件监听
//10:40---10:50
//1:查找购物车项中+
//2:绑定点击事件
$("#cart tbody").on("click",
  "button:contains('+')",
  function(e){
  //1:获取当前购物车id
  var cid = $(this).attr("class");
  //2:预留this
  var self = this;
  //3:发送ajax请求
  $.ajax({
    url:"data/shopping_add_cart_08.php",
    data:{cid:cid},
    success:function(data){
      //如果更新成功
      if(data.code>0){
       //1:获取数量 input
       var inputCount = $(self).prev();
       //2:加1操作
       var inputNum = parseInt(inputCount.val())+1;
       //3:保存回原有input
       inputCount.val(inputNum);

       //4:单价
       var priceInput = $(self).parent().prev().html();

       //5:小计显示区域
       var nextTd = $(self).parent().next();

       //6:计算
       var sum = priceInput*inputNum;
       nextTd.html("<span>￥"+sum+"</span>");
      }
    }
  });
  
});  
//3:发送ajax请求 
//4:返回成功
//  4.1:前一个兄弟 数量 + 1
//  4.2:当前元素父元素  数量  价格  小计 
  

});