//游戏主程序
var game={
  RN:20,CN:10,//保存最大的行数和列数
  shape:null,//保存正在下落的主角
  //保存游戏主界面容器div
  pg:document.querySelector(
    ".playground"),
  CSIZE:26,OFFSET:15,//格子大小和边距
  interval:200,//下落的速度
  timer:null,//保存定时器序号
  wall:null,//保存停止下落的方块墙
  //启动游戏
  start(){
    //this->game
    //初始化wall为RN行*CN列
    this.wall=[];
    for(var r=0;r<this.RN;r++){
      this.wall.push(
        new Array(this.CN));
    }
    console.dir(this.wall);
    //this->game
    this.shape=new T();//创建主角图形
    this.paint();//重绘一切
    //启动周期性定时器
    this.timer=setInterval(
      this.moveDown.bind(this),
      this.interval);
    //为当前页面绑定键盘按下事件
    document.onkeydown=function(e){
      switch(e.keyCode){
        case 37://左
          this.moveLeft();
          break;
        case 39://右
          this.moveRight();
          break;
        case 40://下
          this.moveDown();
          break;
      }
    }.bind(this);
  },
  canLeft(){
    //遍历主角图形中cells的每个cell
    for(var cell of this.shape.cells){
      //如果cell的c等于0
      if(cell.c==0)
        return false;//就返回false
      //否则如果wall中cell位置的左侧不是undefined
      else if(
        this.wall[cell.r][cell.c-1]
        !==undefined
      )
        return false;//就返回false
    }//(遍历结束)
    return true;//就返回true
  },
  moveLeft(){
    if(this.canLeft()){
      this.shape.moveLeft();
      this.paint();
    }
  },
  canRight(){
    //遍历主角中cells中每个cell
    for(var cell of this.shape.cells){
      //如果cell的c等于CN-1
      if(cell.c==this.CN-1)
        return false;//就返回false
      //否则如果wall中cell位置右侧不是undefined
      else if(
        this.wall[cell.r][cell.c+1]
        !==undefined)
        return false;//就返回false
    }//(遍历结束)
    return true;//返回true
  },
  moveRight(){
    if(this.canRight()){
      this.shape.moveRight();
      this.paint();
    }
  },
  //让主角图形下落一行
  moveDown(){
    //只有可以下落时才下落
    if(this.canDown()){
      //this->game
      //调用主角图形的moveDown方法
      this.shape.moveDown();
    }else{//停止下落后
      //让主角的格落入墙中
      this.landIntoWall();
      //生成新主角
      this.shape=new T();
    }
    this.paint();//重绘一切
  },
  //验证是否可下落
  canDown(){
    //遍历主角中cells中每个cell
    for(var cell of this.shape.cells){
      //如果当前cell的r等于RN-1
      if(cell.r==this.RN-1)
        return false;//返回false
      //否则如果wall中当前cell相同位置的下方不是undefined
      else if(
        this.wall[cell.r+1][cell.c]
        !==undefined)
        return false;//返回false
    }//(遍历结束)
    return true;//返回true
  },
  //将主角图形中的格落入强中
  landIntoWall(){
    //遍历主角图形中cells中每个cell
    for(var cell of this.shape.cells){
      //将当前cell保存到wall中相同位置
      this.wall[cell.r][cell.c]=
                              cell;
    }
  },
  //专门删除pg中所有img，再重绘一切
  paint(){
    //用正则替换pg内容中的img为""，再将替换结果保存回pg的内容中
    this.pg.innerHTML=
      this.pg.innerHTML.replace(
        /<img .*>/ig,""
      );
    this.paintShape();//重绘主角
    this.paintWall();//重绘墙
  },
  //重绘墙
  paintWall(){
    //创建frag
    var frag=
      document.createDocumentFragment();
    //遍历wall中的每个cell
    for(var row of this.wall)
      for(var cell of row)
        if(cell!==undefined)
          //绘制当前格
          this.paintCell(cell,frag);
    //(遍历结束)
    //将frag追加到pg中
    this.pg.appendChild(frag);
  },
  //绘制一个格子img
  paintCell(cell,frag){
    //创建一个img
    var img=new Image();
    //设置img的src为当前cell的src
    img.src=cell.src;
    //设置img的宽为CSIZE
    img.style.width=
      this.CSIZE+"px";
    //设置img的top为当前cell的r*CSIZE+OFFSET
    img.style.top=
      cell.r*this.CSIZE
      +this.OFFSET+"px";
    //设置img的left为当前cell的c*CSIZE+OFFSET
    img.style.left=
      cell.c*this.CSIZE
      +this.OFFSET+"px";
    //将img追加到frag中
    frag.appendChild(img);
  },
  //绘制主角图形
  paintShape(){
    //创建frag
    var frag=document.createDocumentFragment();
    //遍历主角图形shape中cells数组中每个cell
    for(var cell of this.shape.cells){
      //绘制当前格
      this.paintCell(cell,frag);
    }//(遍历结束)
    //将frag追加到pg中
    this.pg.appendChild(frag);
  }
}
game.start();