// !代码块 node-http-server
// !引入http模块
var http = require('http');

/*
    request 获取url穿过来的信息
    response 给浏览器响应信息
*/
http.createServer(function (request, response) {
  // !设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // !页面上输出内容并且结束响应
  response.end('Hello Xiaoxiaowei');
}).listen(8081); //!端口

console.log('Server running at http://127.0.0.1:8081/');