var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/', function (req, res, next) {
    res.sendFile('expense.html', { root: 'public/app/expense' })
});

module.exports = router;