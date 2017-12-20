//功能模块1：监听登录按钮 11:25---11:40
//1:获取登录按钮
//2:绑定点击事件
$("#bt-login").click(function(){
 //3:获取用户输入用户名和密码
 var u = $("#uname").val();
 var p =  $("#upwd").val();
 //4:验证 用户名密码
 var reguname =/^[a-z0-9]{3,8}$/i;
 var regupwd =/^[a-z0-9]{3,8}$/i;
 if(!reguname.test(u)){
   alert("用户名格式不正确");
   return;
 }
 if(!regupwd.test(p)){
    alert("密码格式不正确");
    return;
 }
 //5:如果验证不能成功提示，终止程序
 //6:发送AJAX请求
 $.ajax({
   type:"POST",
   url:"/login",
   data:{uname:u,upwd:p},
   success:function(data){
     if(data.code===1){
       alert("登录成功!3s后跳转用户中心");
       //将用户uid/uname保存 session会话
       sessionStorage['loginName']=u;
       sessionStorage['loginUid']=data.uid;
       //自动跳转 usercenter.html
       location.href = "usercenter.html";
     }else{
       alert("登录失败"+data.msg);
     }
   }
 });
});
