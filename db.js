const mongoose = require('moongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('localhost:27017', function(err){
            if(err){
                console.error('monngodb connection error', err);                
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./user.js');
};