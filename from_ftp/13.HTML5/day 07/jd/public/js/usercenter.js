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