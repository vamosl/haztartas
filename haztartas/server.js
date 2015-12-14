
//csak a solution-on belüli elérési utakkal hivatkozni
require('app-module-path').addPath(__dirname);
//var cluster = require('cluster');

//if (cluster.isMaster) {
//    var numWorkers = require('os').cpus().length;
    
//    console.log('Master cluster setting up ' + numWorkers + ' workers...');
    
//    for (var i = 0; i < numWorkers; i++) {
//        cluster.fork();
//    }
    
//    cluster.on('online', function (worker) {
//        console.log('Worker ' + worker.process.pid + ' is online');
//    });
    
//    cluster.on('exit', function (worker, code, signal) {
//        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
//        console.log('Starting a new worker');
//        cluster.fork();
//    });
//}
//else {
    var port = process.env.port || 1337;
    var express = require('express');
    var app = express();

    app.use('', express.static('public'));
    
    var index = require('server/app/index/route-index.js');
    var expense = require('server/app/expense/route-expense.js');
    
    app.use('/', index);
    app.use('/expense', expense);

    app.use(function (err, req, res, next) {
        if (!err) return next(); // you also need this line
        console.log(err);
        res.send("error!!!");
    });
    app.listen(port, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');
//}