const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname;//url에서 path 추출
    if (request.method === 'GET') {
        if (path === '/about') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/about.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/') {
            response.writeHead(200, { 'Content-Type': 'text.html' });
            fs.readFile(__dirname + '/main.html', (err, data) => {
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else {
            response.statusCode = 404;
            response.end('주소가 없습니다.');
        }
    }
    /*
        이런 방식은 다음과 같은 단점이 있다.
        - 코드가 너무 반복
        - 페이지 별로 HTML을 따로 만들어야 함
        - 각각 주소와 연결해야 함
        
        이를 해결하기 위한 프레임워크가 express.js
    */
}).listen(8080);
