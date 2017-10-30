//找触发事件的元素
//获得全选chb
var chbAll=
  document.querySelector(
    "thead th:first-child>input"
  );
//查找要修改的元素
//查找tbody中每行第一个td中的input
var chbs=
  document.querySelectorAll(
    "tbody td:first-child>input"
  );
//绑定事件
chbAll.onclick=function(){
  //this->chbAll
  //修改元素
  //遍历每个chb，改为和chbAll的checked相同
  for(var i=0;i<chbs.length;i++) {
    chbs[i].checked = this.checked;
  }
}
//为chbs中每个chb绑定单击事件:
for(var i=0;i<chbs.length;i++){
  chbs[i].onclick=function(){
    //如果当前chb未选中
    if(!this.checked)
      //chbAll肯定不选中
      chbAll.checked=false
    else{//否则
      //查找tbody中第一个td下未选中的input
      var unChecked=
        document.querySelector(
  "tbody td:first-child>input:not(:checked)"
        );
      if(unChecked==null)//如果没找到
        //chbAll就选中
        chbAll.checked=true;
      else//否则,chbAll就不选中
        chbAll.checked=false;
    }
  }
}