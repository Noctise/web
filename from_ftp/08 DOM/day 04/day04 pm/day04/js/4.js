//Step1:为name为username和pwd的文本框绑定获得焦点事件
//获得表单对象: 
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.pwd;
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
function getFocus(){
  //this->当前文本框
  //当前文本框边框加粗
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除当前文本框的class
  txt.className="";
  //获取旁边div
  var div=txt.parentNode
    .nextElementSibling
    .firstElementChild;
  //用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }
  //否则修改div的class为vali_fail
  else{
    div.className="vali_fail";
    return false;
  }
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
//为表单绑定onsubmit事件
form.onsubmit=function(e){
  //如果验证用户名未通过
  if(!vali(
      form.username,/^\w{1,10}$/)){
    //让用户名获得焦点
    form.username.focus();
    e.preventDefault();//阻止提交
  }else if(!vali(
      form.pwd,/^\d{6}$/)){
  //否则，如果验证密码未通过
    //让密码框获得焦点
    form.pwd.focus();
    e.preventDefault();//阻止提交
  }
}