var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var path = request.url;
  var query = "";
  if (path.indexOf("?") >= 0) {
    query = path.substring(path.indexOf("?"));
  }
  var pathNoQuery = parsedUrl.pathname;
  var queryObject = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看************/

  console.log("HTTP 路径为\n" + path);
  if (path == "/style.css") {
    response.setHeader("Content-Type", "text/css; charset=utf-8");
    // response.write("body{background-color: #ddd;}h1{color: red;}");
    response.write(fs.readFileSync("public/style.css"));
    response.end();
  } else if (path == "/main.js") {
    response.setHeader("Content-Type", "text/javascript; charset=utf-8");
    // response.write('alert("这是JS执行的")');
    response.write(fs.readFileSync('public/main.js'))
    response.end();
  } else if (path == "/index.html") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    // response.write(
    //     "<!DOCTYPE>\n<html>" +
    //         '<head><link rel="stylesheet" href="/style.js">' +
    //         "</head><body>" +
    //         "<h1>你好</h1>" +
    //         '<script src="/script.html"></script>' +
    //         "</body></html>"
    // );
    response.write(fs.readFileSync("public/index.html"));
    response.end();
  } else if (path == "/2.js") {
    response.setHeader("Content-Type", "text/javascript; charset=utf-8");
    // response.write('alert("这是JS执行的")');
    response.write(fs.readFileSync('public/2.js'))
    response.end();
  } else if (path == "/3.html") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.write(fs.readFileSync("public/3.html"));
    response.end();
  } else if (path == "/4.xml") {
    response.setHeader("Content-Type", "text/xml; charset=utf-8"); // text 类型也要改
    response.write(fs.readFileSync("public/4.xml"));
    response.end();
  } else if (path == "/5.json") {
    response.setHeader("Content-Type", "text/json; charset=utf-8"); // text 类型也要改
    response.write(fs.readFileSync("public/5.json"));
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }

  /******** 代码结束，下面不要看************/
});

server.listen(port);
console.log("监听 " + port + " 成功\n请用在浏览器打开http://localhost:" + port);