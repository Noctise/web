//获得表单:
var form=//document.forms[0];
        document.forms["form1"];
//Step1:为name为username和pwd的文本框绑定获得焦点事件
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
  //否则修改div的class为vali_fail
  }else{
    div.className="vali_fail";
    return false;
  }
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
//找到倒数第二个提交按钮
var btnSubmit=
  form.elements[form.length-2];
btnSubmit.onclick=function(){
  //如果验证姓名文本框未通过
  if(!vali(txtName,/^\w{1,10}$/))
    //让txtName获得焦点
    txtName.focus();
  //否则如果验证密码框未通过
  else if(!vali(txtPwd,/^\d{6}$/))
    //让密码框获得焦点
    txtPwd.focus();
  //否则只有都验证通过,才手动提交
  else form.submit();
}