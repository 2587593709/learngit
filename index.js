var http=require("http");
var server=http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
res.end("哈哈哈哈，欢迎您！")

}).listen(300,"139.199.89.248");
