
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
  show(1);
});
//功能3：等页面加载成功后，异步请求页头和页尾
//10:20--10:30
//1:创建页面加载成功事件
$(function(){
  $.ajax({
    'url':'data/header.php',
    success:function(data){
      $("#header").html(data);
    }
  });
  $.ajax({
    url:"data/footer.php",
    success:function(data){
      $("#footer").html(data);
    }
  });
});

//10:31--10:41
//1: 为页码添加点击功能(分页显示)
//   [1][2][3][4][5]
//# 注意事项:动态添加的元素
//# 建议使用jquery代理事件处理
$("ol.pager").on('click','li a',function(e){
  //2:阻止事件默认行为
  e.preventDefault();
  //3:获取当前页->页码
  var pno = $(this).html();
  //4:发起异步请求，获取当前页产品列表,
  //  并且更新分页条 1 2 3 4 5
  show(pno);
});
//2: 点击成功显示当前页内容
//将获以当前页内容ajax 并且更新页码ajax,保存函数
//为其添加参数 pno 当前页
function show(pno){
  //2:发送ajax请求 data/productlist.php
 $.ajax({
   url:"data/productlist.php?pno="+pno,
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

}



//功能模块4：为每个商品下面"添加到购物车"
//绑定监听事件---事件代理 14:40--14:50
$("#plist").on("click","a.addcart",function(e){
  //1:阻止事件默认行为 ?  子元素 a
  e.preventDefault();
  //2:获取当前商品编号    href pid
  var pid = $(this).attr("href");
  //3:获取当前登录用      uid
  var u = uid;
  //4:发送ajax请求 data/add_cart.php
  $.ajax({
     type:"POST",  //
     url:"data/add_cart.php",
     data:{pid:pid,uid:u},
     success:function(data){
       if(data.code<0){
          alert("添加失败,原因"+data.msg);
       }else{
          alert("添加成功,该商品己购买:"+data.pcount);
       }
     },
     error:function(data){
       alert("添加商品失败,请检查网络");
     }
  });
  //5:接收返回数据 data.code
  //6:如果成功   添加成功，该商品己购买 1
  //7:添加失败
  //8:如果出现 404 500 添加商品失败请检查网络
});

//功能模块5：为"去购物车结算"绑定事件
//1:获取按钮 
$("#header").on('click',"#settle_up",function(){
 //2:???将当前登录用户uid 保存cookie
 //3:自动跳转 shoppingcart.html 页面  
 location.href = 'shoppingcart.html';
});

//创建php cartlist.php   15:35--15:45
//1:获取参数 uid
//2:查询该用户购物车所有信息 
//3:输出 json