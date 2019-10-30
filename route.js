const express = require('express');
const router = express.Router();
const User = require('./user.js');
router.get('/', (req, res) => {
    res.render('main'); // res.sendFile 대신
});
router.get('/about', (req, res) => {
    res.render('about'); // res.sendFile 대신
});
router.get('/:name', (req, res) => {
    User.find({ name: req.params.name }, (err, user) => {
        res.render('main', { user: user });
    })
})
module.exports = router;