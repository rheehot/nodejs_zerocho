const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./user');

module.exports = () => {
    passport.serializeUser((user, done) => { // Strategy 성공시 호출됨
        done(null, user); // 여기의 user가 deserializeUser의 첫번째 매개변수로 이동
    }); // 세션에 저장

    passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done 인자 user를 받은 것
        done(null, user); // 여기의 user가 req.user가 됨
    }); // ㅅ

    passport.use(new LocalStrategy({
        usernameField: 'id', // 어떤 폼 필드(id)로부터 아이디를 전달 받을지
        passwordField: 'pw', // 어떤 폼 필드(pw)로부터 비밀번호를 전달 받을지
        session: true, // 세션에 저장 여부
        passReqToCallback: false, // true면 뒤 콜백이 (req, id, ..)처럼 req이 추가
    }, (id, password, done) => {
        Users.findOne({ id: id }, (findError, user) => {
            if (findError) return done(findError); // 서버 에러 처리
            if (!user) return done(null, false, {message: '존재하지 않는 아이디입니다. '}); // 임의 에러 처리
            return user.comparePassword(password, (passError) => {
                if(isMatch){
                    return done(null, user); // 검증 성공
                }
                return done(null, false, { message: '비밀번호가 틀렸습니다. '}); // 임의 에러 처리
            });
        });
    }));
};