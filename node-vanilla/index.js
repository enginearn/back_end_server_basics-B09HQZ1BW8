// index.js

const http = require('http');

http.createServer(function(req, res) {
    // GETリクエストやPOSTリクエストの場合のみ処理
    if (req.url === '/' && req.method === 'GET') {
        console.log("req: ", req);
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.write("こんにちは！"); // res.send()は、end()も含まれている
        res.end();
    } else if (req.url === '/about' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.write("ここはautumnです");
        res.end();
    } else if (req.url === '/hobby' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<form action="/outdoor" method="post">\
                   <input type="text" name="sports">\
                   <button type="submit">SUBMIT</button>\
                   </form>');
    } else if (req.url === "/outdoor" && req.method === "POST") {
        console.log("req: ", req);
    }
}).listen(4000, function() {
    // ブラウザでlocalhost:4000を開いたときの処理
    console.log('Server is running on 4000');
});