$("#bt-register").click(function(){
  //15:15--15:30
  //1:获取用户名,密码,确认密码，主页
  var u = $("#uname").val();
  var p = $("#upwd").val();
  var p1 = $("#upwd1").val();
  var h = $("#homepage").val();
  //2:验证用户名
  if(u==""){alert("用户名不能为空");return;}
  if(p==""){alert("密码不能为空");return;}
  if(p1!=p){alert("密码与确认密码不同");return;}
  if(h==""){alert("主页地址不能为空");return;}
  //5:发送AJAX一个请求 /register
  $.ajax({
    url:"/register",
    type:"POST",
    data:{uname:u,upwd:p,homepage:h},
    success:function(data){
      if(data.code===1){
        alert("注册成功，3秒后跳转登录页面...");
        setTimeout(function(){
          location.href = "login.html";
        },3000);
      }else{
        alert("注册失败");
      }
    }
  });
  //6:code==1
  //7:3秒钟后自动跳转 login.html
});