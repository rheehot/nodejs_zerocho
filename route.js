const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('main'); // res.sendFile 대신
});
router.get('/about', (req, res) => {
    res.render('about'); // res.sendFile 대신
});
module.exports = router;