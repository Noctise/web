

function indexFn(){console.log("index");}
function searchFn(){console.log("search");}
function loginFn(){console.log("login");}
//path 路径
var path = "/login1";

//方式一:if else
if(path==="/index"){
  indexFn();
}else if(path==="/search"){
  searchFn();
}else if(path==="/login"){
  loginFn();
}else{
  indexFn();
}
//方式二:switch
switch(path){
  case "/index":indexFn();break;
  case "/search":searchFn();break;
  case "/login":loginFn();break;
  default:indexFn();break;
}