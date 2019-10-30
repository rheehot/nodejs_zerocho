const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./user.js'); // user.js는 나중에 만듭니다.
};
