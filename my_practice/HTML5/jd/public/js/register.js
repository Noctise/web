$("#bt-register").click(function(){
    var u=$("#uname").val();
    var p=$("#upwd").val();
    var p1=$("#upwd1").val();
    var h = $("#homepage").val();

    if(u==""){alert("can't be empty");return;}
    if(p==""){alert("can't be empty");return;}
    if(p1!=p){alert("can't be different");return;}
    if(h==""){alert("homepage can't be empty");return;}

    $.ajax({
        url:"/register",
        type:"POST",
        data:{uname:u,upwd:p,homepage:h},
        success:function(data){
            if(data.code===1){
                alert("注册成功，3s后跳转");
                setTimeout(function(){
                   location.href="login.html";
                },3000);
            }else{
                alert("注册失败");
            }
        }
    });
});