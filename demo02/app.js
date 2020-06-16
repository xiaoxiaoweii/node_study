const http = require("http");
const url = require('url');
/*
    req 获取url穿过来的信息
    res 给浏览器响应信息
*/

http.createServer((req, res) => {

  // http://127.0.0.1:3000/?name=zhangsan&age=20 获取url传过来的name和age
  console.log(req.url); //获取url
  // 设置响应头
  // 状态码 200 文件类型 html 字符集 utf-8
  res.writeHead(200, { "Content-type": "text/html;chartset='utf-8" });
  res.write("<head></head><meta charset='UTF-8'></meta></head>"); //解决乱码
  console.log(req.url) //获取浏览器访问地址

  if(req.url != '/favicon.ico') {
    var userinfo = url.parse(req.url,true).query
    console.log(`姓名: ${userinfo.name}--年龄: ${userinfo.age}`);
  }
  res.end('你好nodejs'); // 结束响应
  // 监听端口
}).listen(3000);
