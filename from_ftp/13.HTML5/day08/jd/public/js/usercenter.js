//功能点一:页面加载完成，异步请求页头页尾
$("#header").load("header.html",function(){
  $("#welcome").html("欢迎回来"+sessionStorage['loginName'])
});
$("#footer").load("footer.html");

//功能点二:为附加导航中的超链接添加单击事件-
//事件代理
$(".affix").on("click","li a",function(e){
  //1:阻止事件默认行为
  e.preventDefault();
  //2: 为当前元素父元素添加class active
  //3: 将其兄弟元素移除active
  $(this).parent().addClass("active").siblings(".active").removeClass("active");
  //4: 查找对应右侧区域添加active
  //5: 根据A元素href找到对应右侧div,
  //   修改.active位置
  var id = $(this).attr("href");
  $(id).addClass("active").siblings(".active").removeClass("active");
});

//功能点三: 异步请求"消息统计"数据,绘制SVG统计图
$.ajax({
  url:"/svgstat",
  success:function(data){
     ////1:获取SVG画布宽度和高度
     //var svgW = s1.getAttribute("width");
     //var svgH = s1.getAttribute("height");
     //
     ////2:根据JSON数组创建柱状图
     //var html = "";
     //for(var i=0;i<data.length;i++){
     //   var obj = data[i];
     //   var w = svgW/(2*data.length+1);
     //   var h = obj.value/30;
     //   var x = w*(2*i+1);
     //   var y = svgH-h;
     //   html += `
     //     <rect fill="${rc()}" width="${w}" height="${h}" x="${x}" y="${y}"></rect>
     //   `;
     //}
     //$("#s1").html(html);
    //第三方绘图工具
    var c = new FusionCharts({
      type:"bar3d",//pie3d line bar3d bar2d
      renderAt:"container-buystat-svg",
      width:'800',
      height:'400',
      dataSource:{data:data}
    });
    c.render();//把图表泻染到DOM树
  }
});

function rc(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}



//功能点四:获取所有用户订单信息
$.ajax({
  type:"GET",
  url:"/orders",
  data:{uid:sessionStorage['loginUid']},
  success:function(data){
     var html = "";
     for(var i=0;i<data.length;i++){
         var obj = data[i];
         html += `
          <tr>
            <td><img src="${obj.pic}"/></td>
            <td>${obj.pname}</td>
            <td>${obj.price}</td>
            <td>${obj.count}</td>
            <td><a href="${obj.did}" class="btn-del">删除</a></td>
          </tr>
         `;
     }
     $("#tb1").html(html);
  }
});



//功能点五:幸运抽奖

//第一步:创建二个图片对象
//1:获取canvas画笔
var ctx = $("#canvas-lottery")[0].getContext("2d");
//2:创建二个变量保存画布宽度高度
var w = 499;
var h = 499;
//3:创建变量 progress 保存图片加载进度
var progress = 0;
//4:创建第一个图片对象  img/pan.png
var imgPan = new Image();
imgPan.src = "img/pan.png";
imgPan.onload = function(){
  progress+=50;
  if(progress===100){
    startDraw();
  }
}
//5:创建第二个图片对象  img/pin.png
var imgPin = new Image();
imgPin.src = "img/pin.png";
imgPin.onload = function(){
  progress+=50;
  if(progress===100){
    startDraw();
  }
}
//第二步:获取按钮绑定事件 转盘旋转停止
function startDraw(){
  //1:将转盘画，画布
  ctx.drawImage(imgPan,0,0);
  //2:将指针画，画布
  ctx.drawImage(imgPin,w/2-imgPin.width/2,h/2-imgPin.height/2);
  //3:为按钮绑定一次点击事件....4-10s
  $("#bt-lottery").one("click",function(){
    //4:创建变量保存旋转总时长(4-9秒)
    var duration = Math.random()*5000+4000;
    //5:当前己经旋转时长
    var last = 0;
    //6:当前己经旋转角度
    var deg = 0;
    //7:创建定时器
    var timer = setInterval(function(){
      //8:画转盘
      //保存状态0>平移->旋转->绘图->恢复状态
      ctx.save();
      ctx.translate(w/2,h/2);
      ctx.rotate(deg*Math.PI/180);
      ctx.drawImage(imgPan,-imgPan.width/2,-imgPan.height/2);
      ctx.restore();
      deg+=5;

      ctx.drawImage(imgPin,w/2-imgPin.width/2,h/2-imgPin.height/2);

      last += 10;

      if(duration<last){
        clearInterval(timer);
      }
    },10);

  });
}



