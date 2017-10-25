//找触发事件的元素
var txtName=
  document.getElementsByName(
    "username"
  )[0];
var txtPwd=
  document.getElementsByName(
    "pwd"
  )[0];
//绑定事件
txtName.onfocus=getFocus;
function getFocus(){
  //找要修改的元素
  //修改元素
  //为自己穿txt_focus
  this.className="txt_focus";
  //找到旁边的div,清除其class
  this.parentNode
      .nextElementSibling
      .children[0]
      .className="";
}
txtPwd.onfocus=getFocus;

//为文本框绑定失去焦点事件:
txtName.onblur=function(){
  //this->txtName
  //定义正则:\w{1,10}
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除文本框的class
  txt.className="";
  //查找旁边的div
  var div=txt.parentNode
            .nextElementSibling
            .children[0];
  //如果用正则验证自己的内容通过
  if(reg.test(txt.value))
    //设置旁边的div的class为vali_success
    div.className="vali_success";
  else//否则
    //设置旁边的div的class为vali_fail
    div.className="vali_fail";
}
txtPwd.onblur=function(){
  //this->txtPwd
  //定义正则:\d{6}
  vali(this,/^\d{6}$/);
}


