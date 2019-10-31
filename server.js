const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js'); // db 불러오기
const route = require('./route.js');
const methodOverride = require('method-override');
const bodyParse = require('body-parse');

app.set('view engine', 'pug'); // (1) 엔진을 pug로 설정하는 부분
app.set('views', path.join(__dirname, 'html')); // (2) pug 파일들이 있는 폴더를 정하는 부분
db(); // db 실행
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.use(methodOverride()); // PUT, DELETE를 지원 안 하는 클라이언트를 위해
app.use(bodyParser.json()); // body의 데이터를 json 형식으로 받음
app.use(bodyParser.urlencoded({ extended: true })); // qs모듈로 쿼리스트링 파싱
//에러 처리 부분
app.listen(8080, () => {
    console.log('Express App on port 8080!');
});