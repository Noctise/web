//专门描述游戏中的数据结构——建模
//ES6
//格子类型: 描述每个格子的位置和图片
class Cell{
  constructor(r,c,src){
    this.r=r;this.c=c;this.src=src;
  }
}
//所有图形类型的公共父类型Shape:
//保存所有图形类型的公共属性结构和方法
class Shape{
  constructor(
    r0,c0,r1,c1,r2,c2,r3,c3,src){
    this.cells=[
      new Cell(r0,c0,src),
      new Cell(r1,c1,src),
      new Cell(r2,c2,src),
      new Cell(r3,c3,src),
    ]
  }
  //让当前图形下落一行
  moveDown(){
    //遍历当前图形的cells中每个cell
    for(var cell of this.cells)
      cell.r++;//将当前cell的r+1
  }
  moveLeft(){
    //遍历当前图形的cells中每个cell
    for(var cell of this.cells)
      cell.c--;//将当前cell的c-1
  }
  moveRight(){
    //遍历当前图形的cells中每个cell
    for(var cell of this.cells)
      cell.c++;//将当前cell的c+1
  }
  rotateR(){}
  rotateL(){}
}
//定义所有T图形的类型:
class T extends Shape{
  constructor(){
    super(
      0,3,0,4,0,5,1,4,"img/T.png")
  }
}
//定义所有O图形的类型:
class O extends Shape{
  constructor(){
    super(
      0,4,0,5,1,4,1,5,"img/O.png")
  }
}
//定义所有I图形的类型:
class I extends Shape{
  constructor(){
    super(
      0,3,0,4,0,5,0,6,"img/I.png")
  }
}
var t=new T();//O I
console.dir(t);
