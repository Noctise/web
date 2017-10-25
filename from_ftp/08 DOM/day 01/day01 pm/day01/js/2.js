//遍历指定父元素下所有后代节点
//方法一: 递归
//Step1: 定义函数遍历指定父元素下直接子节点
function getChildren1(parent){
  //输出parent
  //如果不是文本节点就输出节点名,否则输出节点内容
  console.log(
    parent.nodeType!=3?
      parent.nodeName:
      parent.nodeValue
  );
  //获得parent的所有直接子节点
  var children=parent.childNodes;
  //遍历parent的所有直接子节点
  for(var i=0,len=children.length;
      i<len;i++){
    //Step2: 对碰到的每个子节点调用和父节点完全相同的操作
    arguments.callee(children[i]);
  }
}
//方法二: 循环代替递归:
function getChildren2(parent){
  var iterator=
    document.createNodeIterator(
      parent, NodeFilter.SHOW_ALL,
      null, false
    );
  do{
    var node=iterator.nextNode();
    if(node!==null){
      console.log(
        node.nodeType!=3?
          node.nodeName:
          node.nodeValue
      );
    }else break;
  }while(true);
}
getChildren2(document.body)

/*
console.time("getChildren1");
getChildren1(document.body);
console.timeEnd("getChildren1");
console.time("getChildren2");
getChildren2(document.body);
console.timeEnd("getChildren2");
*/