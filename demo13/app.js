const http = require('http');
const routes = require('./module/routes');
const url = require('url');


http.createServer(function (req, res) {   
    //创建静态web服务
    routes.static(req,res,'static');
    //路由
    let pathname=url.parse(req.url).pathname.replace("/","");
    //http://127.0.0.1:3000/news      pathname=news  
    //http://127.0.0.1:3000/login      pathname=login  
    // http://127.0.0.1:3000/xxxx      pathname=xxxx   app.xxxx不存在 
    try {
        routes[pathname](req, res);
    } catch (error) {
        routes['error'](req, res);
    } 


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');