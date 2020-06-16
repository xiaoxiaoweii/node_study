const url = require('url');

var api = 'https://www.baidu.com?wd=haha'

var getValue = url.parse(api,true).query;

console.log(getValue)

console.log(`关键词: ${getValue.wd}`)
 