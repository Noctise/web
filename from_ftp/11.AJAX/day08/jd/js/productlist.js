
//#功能模块一:用户登录  14:50--15:00
//1:获取登录表单按钮 id=bt-login
//2:绑定点击事件
$("#bt-login").click(function(){
console.log(1);
//3:获取用户输入的用户名和密码
var n = $("#uname").val();
var p = $("#upwd").val();
console.log(2+n+p);
//4:发送ajax请求 post 
$.ajax({
   type:"POST",
   url:"data/login.php",
   data:{uname:n,upwd:p},
   error:function(data){ //404 500
      console.log(4);    //json格式不正确 
   },
   success:function(data){
     console.log(3+data);
     //5:判断登录成功 隐藏模态框    class="modal"
     //6:判断登录失败 获取出错信息 
     if(data.code<0){
       //登录失败
       $("p.alert").html(data.msg);
     }else{//15:35---15:45
       //1:隐藏登录框 a:产品表 b:productlist.php

       $(".modal").hide();
       //2:保存用户名和用户id
       //创建全局变量保存用户名和用户编号
       uname=data.uname;
       uid=data.uid;
       console.log(5+uname+uid);
     }
   }
});
});
var uname='';
var uid='';


//第二个模块:产品列表 16:55--17:05
//1:页面加载成功事件
$(function(){
  //2:发送ajax请求 data/productlist.php
 $.ajax({
   url:"data/productlist.php",
   success:function(data){
    //3:获取返回数据
    var html = "";
    //4:创建空字符串拼接
    for(var i=0;i<data.length;i++){
        var obj = data[i];
        html += `
<li>
    <a href=""><img src="${obj.pic}" alt=""/></a>
    <p>￥${obj.price}</p>
    <h1><a href="">${obj.pname}</a></h1>
    <div>
        <a href="" class="contrast"><i></i>对比</a>
        <a href="" class="p-operate"><i></i>关注</a>
        <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
    </div>
</li>          
        `;
    }
    //5:保存#plist ul      
    $("#plist ul").html(html);
   }
 });


  //页面加载成功后发送ajax获取总页数
  $.ajax({
    url:"data/productpage.php",
    success:function(data){  //{page:5}
      //1:创建空字符串
      var html = "";
      //2:循环创建页码标签
      for(var i=1;i<=data.page;i++){
          html += `
          <li><a href="#">${i}</a></li>  
          `;
      }
      //3:保存<ol class="pager">
      $("ol.pager").html(html);
    }
  });

});



