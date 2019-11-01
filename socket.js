// 실시간 업데이트를 위해
// https://poiemaweb.com/nodejs-socketio 참고
module.exports = (io) => {
    io.on('connection', (socket) => { // 웹소켓 연결시
        console.log('Socket initiated!');
        socket.on('newScoreToServer', (data) => { // 클라이언트에서 newScoreToServer로 이벤트 요청시
            console.log('Socket: newScore');
            io.emit('newScoreToClient', data); // 클라이언트로 데이터를 보내는 것. (자신을 포함한 모든 클라이언트로 소켓 요청을 보냄)
        });
    });
};