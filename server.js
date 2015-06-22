
var express = require('express');  //node module for express server

var app =express(); //initialize express

app.set('views',__dirname + '/server/views');


console.log("This is the path " + __dirname);



//app use is used to use middleware
app.use(express.static('public')); //static route handling

app.set('view engine','jade');

// routes   req=request res = response ..It stimulates a http request..Both are global objects

app.get('/', function(req,res){

	res.render('index');
})

app.get('/login', function(req,res){

	res.render('index');
})

app.listen(3020); //listen at specific port

console.log("Express server is listening at port 3020");

