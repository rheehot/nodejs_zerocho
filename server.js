const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');

app.set('view engine', 'pug'); // (1) 엔진을 pug로 설정하는 부분
app.set('views', path.join(__dirname, 'html')); // (2) pug 파일들이 있는 폴더를 정하는 부분

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);

app.listen(8080, () => {
    console.log('Express App on port 8080!');
});