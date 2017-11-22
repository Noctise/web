<?php
  //功能:AJAX 处理数据格式javascript
  //服务器php: 输出  javascript程序
  //1:修改响应主体内容 application/javascript
  //2:输出程序???
  //  获取客户端首选语言
  //  如果首选语言前二个字符 zh 输出 你好
  //  ..                     en 输出 hello
  //  ..                     ja 输出 ..
  //客户端js:  接收 eval()  
  
  //0:修改响应主体内容 js
  header("Content-Type:application/javascript;charset=utf-8");
  //?1:获取所有用户请求头部信息
  $all = getallheaders();
  //?2:获取其中-首选语言
  $lang = $all['Accept-Language'];
  //?3:截取前二个字母
  $start2 = substr($lang,0,2);
  //?4:判断如果前二个字母 zh 输出 alert('你好');
  //   ..                 en 输出 alert('hello');
  //
  if($start2==='zh'){
    echo 'var msg="你好";alert(msg)';
  }else if($start2==='en'){
    echo 'var msg="hello";alert(msg)';
  }else{
    echo 'var msg="hello";alert(msg)';
  }
?>