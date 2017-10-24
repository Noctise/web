var data=null,//保存4行4列二维数组
    RN=4,CN=4,//最大行/列数
    score=0,//得分
    status=0,GAMEOVER=0,RUNNING=1;
function start(){//游戏启动
  status=RUNNING;//将游戏状态重置为运行中
  score=0;//将分数初始化为0
/*初始化data为RN行CN列个0元素的二维数组*/
  data=[];//创建空数组保存在data中
  for(var r=0;r<RN;r++){//r从0开始,到<RN
    data.push([]);//创建空数组压入data中
    //c从0开始，到<CN
    for(var c=0;c<CN;c++)
      //向data中r行压入一个0
      data[r].push(0);
  }
/*生成2个随机数*/
  randomNum(); randomNum();
  updateView();//更新页面
/*事件:用户手动触发的状态的改变
* 当事件发生时，会自动触发事件处理函数
* */
  //为页面绑定键盘按下事件处理函数:
  document.onkeydown=function(e){
    //获得并判断键盘号
    switch(e.keyCode){
      case 37://左
        moveLeft();
        break;
      case 38://上
        moveUp();
        break;
      case 39://右
        moveRight();
        break;
      case 40://下
        break;
    }
  }
}
function randomNum(){//随机生成一个数
  while(true){//反复
    //0~RN-1之间随机生成一个r
    var r=parseInt(Math.random()*RN);
    //0~CN-1之间随机生成一个c
    var c=parseInt(Math.random()*CN);
    //如果data中r行c列为0
    if(data[r][c]==0){
      //设置data中r行c列的值为2或4
      data[r][c]=Math.random()<0.5?2:4;;
      break;//退出循环
    }
  }
}
function updateView(){//更新页面数据
  for(var r=0;r<RN;r++){//遍历data
    for(var c=0;c<CN;c++){
      //用id查找对应的div
      var div=
        document.getElementById("c"+r+c);
      //如果data中r行c列为0
      if(data[r][c]==0){
        div.innerHTML="";//清空div的内容
        div.className="";//清空class
      }else{//否则
      //  设置div的内容为data中r行c列
        div.innerHTML=data[r][c];
        div.className="n"+data[r][c];
      }
    }
  }
  //找到id为score的span，设置其内容为score
  document.getElementById("score")
  /*span*/.innerHTML=score;
  //找到id为gameover的div
  var div=document.getElementById("gameover");
  //如果游戏状态为GAMEOVER
  if(status==GAMEOVER){
    //设置div显示
    div.style.display="block";
    //设置id为final的span的内容为score
    document.getElementById("final")
            .innerHTML=score;
  }else{//否则
    //设置div隐藏
    div.style.display="none";
  }
}
//左移所有行
function moveLeft(){
  //为数组拍照保存在before
  var before=String(data);
  for(var r=0;r<RN;r++)//遍历data中每一行
    moveLeftInRow(r);//左移第r行
  //为数组拍照保存在after
  var after=String(data);
  if(before!=after){//如果before!=after
    randomNum();//随机生成2或4
    if(isGameOver())
      status=GAMEOVER;
    updateView();//更新页面
  }
}
//左移第r行
function moveLeftInRow(r){
  //c从0开始，到<CN-1
  for(var c=0;c<CN-1;c++){
    //查找r行c列右侧下一个不为0的位置nextc
    var nextc=getNextInRow(r,c);
    if(nextc!=-1){//如果找到
      //如果r行c列的值为0
      if(data[r][c]==0){
        //将r行nextc位置的值赋值给r行c列
        data[r][c]=data[r][nextc];
        //将r行nextc位置的值置为0
        data[r][nextc]=0;
        c--;//c留在原地
      }else if(
        data[r][c]==data[r][nextc]){
      //否则 如果r行c列的值等于r行nextc列的值
        data[r][c]*=2;//将r行c列的值*2
        score+=data[r][c];
        //将r行nextc列的值置为0
        data[r][nextc]=0;
      }
    }else break;
    //否则，就退出循环
  }
}
//查找r行c列右侧下一个不为0的位置
function getNextInRow(r,c){
  //nextc从c+1开始，到<CN
  for(var nextc=c+1;nextc<CN;nextc++){
    //如果r行nextc位置的值不为0,返回nextc
    if(data[r][nextc]!=0) return nextc;
  }
  return -1;//返回-1
}
//右移所有行
function moveRight(){
  //给data拍照保存在before
  var before=String(data);
  //遍历data中每一行
  for(var r=0;r<RN;r++)
    moveRightInRow(r);//右移第r行
  //给data拍照保存在after
  var after=String(data);
  //如果before不等于after
  if(before!=after){
    randomNum();//随机生成2或4
    if(isGameOver())
      status=GAMEOVER;
    updateView();//更新页面
  }
}
//右移第r行
function moveRightInRow(r){
  //c从CN-1开始反向遍历r行每个元素到>0结束
  for(var c=CN-1;c>0;c--){
    //查找c位置左侧前一个不为0的位置prevc
    var prevc=getPrevInRow(r,c);
    if(prevc!=-1){//如果找到
      //如果c位置的值等于0
      if(data[r][c]==0){
        //将prevc位置的值赋值给c位置
        data[r][c]=data[r][prevc];
        //将prevc位置的值置为0
        data[r][prevc]=0;
        c++;//c留在原地
      }else if(
        data[r][c]==data[r][prevc]){
      //否则,如果c位置的值等于prevc位置的值
        data[r][c]*=2;//将c位置的值*2
        score+=data[r][c];
        //将prevc位置的值置为0
        data[r][prevc]=0;
      }
    }else{break;}//否则，退出循环
  }
}
//查找c位置左侧前一个不为0的位置
function getPrevInRow(r,c){
  //prevc从c-1开始反向遍历，到>=0结束
  for(var prevc=c-1;prevc>=0;prevc--){
    //如果r行prevc列的值不为0,返回prevc
    if(data[r][prevc]!=0) return prevc
  }
  return -1;//(循环结束)返回 -1
}
//上移所有列
function moveUp(){
  //给data拍照保存在before中
  var before=String(data);
  //遍历data中每一列
  for(var c=0;c<CN;c++)
    moveUpInCol(c);//上移第c列
  //给data拍照保存在after中
  var after=String(data);
  //如果before不等于after
  if(before!=after){
    randomNum();//随机生成2或4
    if(isGameOver())
      status=GAMEOVER;
    updateView();//更新页面
  }
}
//上移第c列
function moveUpInCol(c){
  //r从0开始，到<RN-1结束
  for(var r=0;r<RN-1;r++){
    //找r行c列下方下一个不为0的位置nextr
    var nextr=getNextInCol(r,c);
    if(nextr!=-1){//如果找到
      //如果r行c列的值为0
      if(data[r][c]==0){
        //将nextr行c列的值赋值给r行c列
        data[r][c]=data[nextr][c];
        //将nextr行c列的值置为0
        data[nextr][c]=0;
        r--;//r留在原地
      }else if(
        data[r][c]==data[nextr][c]){
        //否则，如果r行c列的值等于nextr行c列的值
        data[r][c]*=2;//将r行c列的值*2
        score+=data[r][c];
        //将nextr行c列的值置为0
        data[nextr][c]=0;
      }
    }else break;//否则,退出循环
  }
}
//找r行c列下方下一个不为0的位置
function getNextInCol(r,c){
  //nextr从r+1开始，到<RN结束
  for(var nextr=r+1;nextr<RN;nextr++){
    //如果nextr行c列不为0，就返回nextr
    if(data[nextr][c]!=0) return nextr;
  }
  return -1;//(遍历结束)返回-1
}
//判断游戏是否结束
function isGameOver(){
  //遍历data
  for(var r=0;r<RN;r++){
    for(var c=0;c<CN;c++){
      if(data[r][c]==0) return false;
      if(c<CN-1
        &&data[r][c]==data[r][c+1])
        return false;
      if(r<RN-1
        &&data[r][c]==data[r+1][c])
        return false;
    }
  }
  //(遍历结束)返回true
  return true;
}
start();