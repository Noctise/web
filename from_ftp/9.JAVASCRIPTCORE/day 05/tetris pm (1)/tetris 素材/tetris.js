//游戏主程序
var game={
  RN:20,CN:10,//保存最大的行数和列数
  shape:null,//保存正在下落的主角
  nextShape:null,//保存备胎图形
  //保存游戏主界面容器div
  pg:document.querySelector(
    ".playground"),
  CSIZE:26,OFFSET:15,//格子大小和边距
  interval:200,//下落的速度
  timer:null,//保存定时器序号
  wall:null,//保存停止下落的方块墙
  lines:0,//保存消除的总行数
  score:0,//保存总得分
  SCORES:[0,10,30,60,80],
        //0 1  2  3  4
  status:0,//保存游戏状态
  GAMEOVER:0,//游戏结束
  RUNNING:1,//运行中
  PAUSE:2,//暂停
  //启动游戏
  start(){
    //重置状态为RUNNING
    this.status=this.RUNNING;
    //将行数和得分归0
    this.lines=0; this.score=0;
    //this->game
    //初始化wall为RN行*CN列
    this.wall=[];
    for(var r=0;r<this.RN;r++){
      this.wall.push(
        new Array(this.CN));
    }
    console.dir(this.wall);
    //this->game
    this.shape=//创建主角图形
      this.randomShape();
    this.nextShape=//创建备胎图形
      this.randomShape();
    this.paint();//重绘一切
    //启动周期性定时器
    this.timer=setInterval(
      this.moveDown.bind(this),
      this.interval);
    //为当前页面绑定键盘按下事件
    document.onkeydown=function(e){
      switch(e.keyCode){
        case 37://左
          if(this.status
              ==this.RUNNING)
            this.moveLeft();
          break;
        case 39://右
          if(this.status
            ==this.RUNNING)
            this.moveRight();
          break;
        case 40://下
          if(this.status
            ==this.RUNNING)
            this.moveDown();
          break;
        case 32://空格
          if(this.status
            ==this.RUNNING)
            this.hardDrop();
          break;
        case 38://上
          if(this.status
            ==this.RUNNING)
            this.rotateR();
          break;
        case 90://Z
          if(this.status
            ==this.RUNNING)
            this.rotateL();
          break;
        case 80://P
          if(this.status
              ==this.RUNNING)
            this.pause();
          break;
        case 81://Q
          if(this.status
              !=this.GAMEOVER){
            this.status=this.GAMEOVER;
            clearInterval(this.timer);
            this.timer=null;
            this.paint();
          }
          break;
        case 83://S
          if(this.status
              ==this.GAMEOVER)
            this.start();
          break;
        case 67://C
          if(this.status
              ==this.PAUSE)
            this.myContinue();
          break;
      }
    }.bind(this);
  },
  myContinue(){
    this.status=this.RUNNING;
    this.timer=setInterval(
      this.moveDown.bind(this),
      this.interval);
    this.paint();
  },
  //暂停
  pause(){
    this.status=this.PAUSE;
    clearInterval(this.timer);
    this.timer=null;
    this.paint();
  },
  //随机生成图形
  randomShape(){
    //在0~2之间生成随机整数r
    var r=parseInt(Math.random()*3);
    switch(r){//判断r
      //是0,就返回一个新创建的O
      case 0: return new O();
      //是1,就返回一个新创建的I
      case 1: return new I();
      //是2,就返回一个新创建的T
      case 2: return new T();
    }
  },
  //顺时针旋转一次
  rotateR(){
    this.shape.rotateR();
    //如果不能旋转，再反向转回
    if(!this.canRotate())
      this.shape.rotateL();
    else
      this.paint();
  },
  //判断旋转后是否越界或撞墙
  canRotate(){
    //遍历主角图形的cells中每个cell
    for(var cell of this.shape.cells){
      //如果cell的r<0或>=RN
        //或cell的c<0或>=CN
      if(cell.r<0||cell.r>=this.RN
          ||cell.c<0
          ||cell.c>=this.CN)
        return false;//返回false
      //否则如果wall中cell相同位置不是undefined
      else if(
        this.wall[cell.r][cell.c]
        !==undefined)
        return false;//返回false
    }//(遍历结束)
    return true;//返回true
  },
  rotateL(){
    this.shape.rotateL();
    //如果不能旋转，再反向转回
    if(!this.canRotate())
      this.shape.rotateR();
    else
      this.paint();
  },
  //一落到底
  hardDrop(){
    //只要可以下落
    while(this.canDown())
      //让主角反复下落
      this.shape.moveDown();
    this.paint();
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
      //删除行
      var ln=this.deleteRows();
      //累加行数
      this.lines+=ln;
      //累加得分
      this.score+=this.SCORES[ln];
      //如果游戏没有结束
      if(!this.isGAMEOVER()){
        //备胎转正
        this.shape=this.nextShape;
        //生成新的备胎
        this.nextShape=
          this.randomShape();
      }else{//否则
        //修改游戏状态为GAMEOVER
        this.status=this.GAMEOVER;
        //停止定时器
        clearInterval(this.timer);
        this.timer=null;
      }
    }
    this.paint();//重绘一切
  },
  //根据游戏状态添加图片
  paintStatus(){
    if(this.status==this.GAMEOVER){
      var img=new Image();
      img.src="img/game-over.png";
      this.pg.appendChild(img);
    }else if(this.status==this.PAUSE){
      var img=new Image();
      img.src="img/pause.png";
      this.pg.appendChild(img);
    }
  },
  //判断游戏是否结束
  isGAMEOVER(){
    //遍历备胎图形的cells中每个cell
    for(var cell of this.nextShape.cells)
      //如果wall中cell相同位置不是undefined
      if(this.wall[cell.r][cell.c]
         !==undefined)
        return true;//返回true
    //(遍历结束)
    return false//返回false
  },
  //重绘得分
  paintScore(){
    //在pg下查找span
    var spans=this.pg.getElementsByTagName("span");
    spans[0].innerHTML=this.score;
    spans[1].innerHTML=this.lines;
  },
  //绘制备胎
  paintNext(){
    //创建frag
    var frag=document.createDocumentFragment();
    //遍历备胎图形中cells数组中每个cell
    for(var cell of this.nextShape.cells){
      //创建一个img
      var img=new Image();
      //设置img的src为当前cell的src
      img.src=cell.src;
      //设置img的宽为CSIZE
      img.style.width=
        this.CSIZE+"px";
      //设置img的top为当前cell的r*CSIZE+OFFSET
      img.style.top=
        (cell.r+1)*this.CSIZE
        +this.OFFSET+"px";
      //设置img的left为当前cell的c*CSIZE+OFFSET
      img.style.left=
        (cell.c+10)*this.CSIZE
        +this.OFFSET+"px";
      //将img追加到frag中
      frag.appendChild(img);
    }//(遍历结束)
    //将frag追加到pg中
    this.pg.appendChild(frag);
  },
  //检查并删除所有满格行
  deleteRows(){
    //自底向上反向遍历wall中每一行
    for(var r=this.RN-1,ln=0;r>=0;r--){
      //如果当前行是满格行
      if(this.isFullRow(r)){
        //删除当前行
        this.deleteRow(r);
        r++;//r留在原地
        ln++;
      }
      //如果r-1行是空行或ln等于4，可提前退出循环
      if(r>0&&this.wall[r-1].join("")==""||ln==4)
        break;
    }
    return ln;//返回本次删除的总行数
  },
  //判断第r行是否满格
  isFullRow(r){
    var reg=/^,|,,|,$/;
    if(reg.test(
        String(this.wall[r])
      ))
      return false
    else
      return true;
  },
  //删除第r行
  deleteRow(dr){
    while(true){//反复:
      //用dr-1行代替dr行
      this.wall[dr]=this.wall[dr-1];
      //将dr-1行置为空数组
      this.wall[dr-1]=
        new Array(this.CN);
      //遍历dr行中每个格
      for(var cell of this.wall[dr])
        //如果cell不是undefined
        if(cell!==undefined)
          //将dr行中每个格的r+1
          cell.r++;
      //(遍历结束)
      //如果dr-2行是空行,退出循环
      if(this.wall[dr-2].join("")=="")
        break;
      else dr--;//否则,dr--
    }
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
    this.paintNext();//重绘备胎
    this.paintScore();//重绘得分
    this.paintStatus();//重绘状态
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