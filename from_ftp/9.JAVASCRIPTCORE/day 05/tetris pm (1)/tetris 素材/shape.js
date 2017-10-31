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
    r0,c0,r1,c1,r2,c2,r3,c3,src,
    states,orgi
  ){
    this.cells=[
      new Cell(r0,c0,src),
      new Cell(r1,c1,src),
      new Cell(r2,c2,src),
      new Cell(r3,c3,src),
    ];
    //获得当前图形每种旋转状态的数组
    this.states=states;
    //获取参照格对象
    this.orgCell=this.cells[orgi];
    //保存当前状态序号的属性
    this.statei=0;
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
  rotateR(){
    //将statei+1
    this.statei++;
    //如果statei等于states的length
    if(this.statei==
        this.states.length)
      this.statei=0;//将statei等于0
    this.rotate();
  }
  rotate(){
    //获得states中statei位置的状态对象
    var state=
      this.states[this.statei];
    //修改每个cell的r和c
    var cell0=this.cells[0];
    cell0.r=this.orgCell.r+state.r0;
    cell0.c=this.orgCell.c+state.c0;
    var cell1=this.cells[1];
    cell1.r=this.orgCell.r+state.r1;
    cell1.c=this.orgCell.c+state.c1;
    var cell2=this.cells[2];
    cell2.r=this.orgCell.r+state.r2;
    cell2.c=this.orgCell.c+state.c2;
    var cell3=this.cells[3];
    cell3.r=this.orgCell.r+state.r3;
    cell3.c=this.orgCell.c+state.c3;
  }
  rotateL(){
    this.statei--;
    if(this.statei==-1)
      this.statei=
        this.states.length-1;
    this.rotate();
  }
}
//定义类型State描述每一种旋转状态
class State{
  constructor(
    r0,c0,r1,c1,r2,c2,r3,c3){
    this.r0=r0;this.c0=c0;
    this.r1=r1;this.c1=c1;
    this.r2=r2;this.c2=c2;
    this.r3=r3;this.c3=c3;
  }
}
//定义所有T图形的类型:
class T extends Shape{
  constructor(){
    super(
      0,3,0,4,0,5,1,4,"img/T.png",
      [//states
        new State(
          0,-1, 0,0, 0,+1, +1,0
        ),
        new State(
          -1,0, 0,0, +1,0, 0,-1
        ),
        new State(
          0,+1, 0,0, 0,-1, -1,0
        ),
        new State(
          +1,0, 0,0, -1,0, 0,+1
        ),
      ],
      1//orgi
    )
  }
}
//定义所有O图形的类型:
class O extends Shape{
  constructor(){
    super(
      0,4,0,5,1,4,1,5,"img/O.png",
      [
        new State(
          0,-1, 0,0, +1,-1, +1,0
        )
      ],
      1
    )
  }
}
//定义所有I图形的类型:
class I extends Shape{
  constructor(){
    super(
      0,3,0,4,0,5,0,6,"img/I.png",
      [
        new State(
          0,-1, 0,0, 0,+1, 0,+2
        ),
        new State(
          -1,0, 0,0, +1,0, +2,0
        )
      ],
      1
    )
  }
}
var t=new T();//O I
console.dir(t);
