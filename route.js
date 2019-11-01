const express = require('express');
const router = express.Router();
const User = require('./user.js');
const passport = require('passport');

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
});

router.get('/user/:name', (req, res) => {
    res.json({ name: req.params.name });
});

router.post('/user', (req, res) => {
    User.insert({ name: req.body.name }, (err,result) => {
        if (err) {
            return next(err);
        }
        res.json(result);
    });
});

router.patch('/change/:name/name/:new', (req, res) => {
    User.update({
        name: req.params.name,
    }, {
        name: req.params.new, 
    }, (err, result) => {
        if(err){
            return next(err);
        }
        res.json(result);
    });
});

router.delete('/user/:name', (req, res) => {
    User.remove({ name: req.params.name }, (err, result) => {
        if(err){
            return next(err);
        }
        res.json(result);
    });
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});

module.exports = router;