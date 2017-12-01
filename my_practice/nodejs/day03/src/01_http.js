const http =require("http");
var server=http.createServer();
server.listen(8080);
server.on("request",(req,res)=>{
res.statusCode=200;
res.setHeader("Content-type","text/html;charset=utf-8");
res.write("<h1>hello</h1>>");
res.end();
});