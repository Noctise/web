//查找触发事件的元素
var spans=
  document.querySelectorAll(
    ".tree>li>span"
  );
//绑定事件
for(var i=0;i<spans.length;i++){
  spans[i].onclick=function(){
    //查找要修改的元素
    //修改元素
    //如果当前span的class是open
    if(this.className=="open")
      //就清除当前span的class
      this.className="";
    else{//否则
      //找class为tree下的li下的class为open的span
      var oSpan=
        document.querySelector(
          ".tree>li>span.open"
        );
      if(oSpan!=null)//如果找到
        //清除oSpan的class
        oSpan.className="";
      //再将自己打开
      this.className="open";
    }
  }
}
