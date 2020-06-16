const http = require("http");
/*
    req 获取url穿过来的信息
    res 给浏览器响应信息
*/

http.createServer((req, res) => {
  console.log(req.url); //获取url
  // 设置响应头
  // 状态码 200 文件类型 html 字符集 utf-8
  res.writeHead(200, { "Content-type": "text/html;chartset='utf-8" });
  res.write("<head></head><meta charset='UTF-8'></meta></head>");
  res.write("this is nodejs");
  res.write("<h2>你好 nodejs</h2>");
  
  
  res.end(); // 结束响应
  // 监听端口
}).listen(3000);
