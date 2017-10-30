//查找触发事件的元素
//绑定事件处理函数
//查找要修改的元素
//修改元素的内容/属性

//功能一: 单击按钮，数量加减
//Step1: 找到id为data的table
var table=
  document.getElementById("data");
//Step2: 在table下找所有button元素
var btns=table.getElementsByTagName(
  "button"
);
//Step3: 遍历所有button，为其绑定单击事件处理函数
for(var i=0,len=btns.length;
    i<len;i++){
  btns[i].onclick=function(){
    //this关键字:自动获得当前触发事件的元素对象
    var span=//找要修改的元素
      this.parentNode.children[1];
    //获得span的内容转为整数保存在n
    var n=span.innerHTML;
    //如果点的是+
    if(this.innerHTML=="+")
      n++;//就n+1
    else if(n>1)//否则如果n>1
      n--;//才n-1
    //将n保存回span的内容中
    span.innerHTML=n;

    //功能二: 计算小计: 单价*n
    var price=parseFloat(
      this.parentNode
          .previousElementSibling
          .innerHTML//¥4488.00
          .slice(1)
    );
    var subTotal=price*n;
    this.parentNode
        .nextElementSibling
        .innerHTML=
          "¥"+subTotal.toFixed(2);
    //功能三: 计算总价:
    //获得tbody中每行最后一个td
    var tds=table.querySelectorAll(
      "tbody td:last-child"
    );
    //定义total=0，用于累加小计
    var total=0;
    //从0开始遍历tds
    for(var i=0;i<tds.length;i++){
      //获得当前td的内容，转为浮点数
      total+=parseFloat(
        tds[i].innerHTML.slice(1)
      );
    }
    //获得tfoot下tr下最后一个td
    table.querySelector(
      "tfoot td:last-child"
    ).innerHTML="¥"+total.toFixed(2)
  }
}
