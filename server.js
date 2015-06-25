var express = require('express'); //Node Module for express server
var mongoose = require('mongoose'); //Node Module for mongoose server
var bodyParser = require('body-parser'); //Node Module for BP server

var User = require('./Server/models/User'); 
var Course = require('./Server/models/Course');
var userController = require('./Server/controllers/user');
var courseController = require('./Server/controllers/course');
//To use Module user
var app=express();

app.set('views',__dirname+'/server/views');
console.log(__dirname+"   This is a variable");
app.set('view engine','jade');
app.use(express.static('public')); //static route handling

//Routes
app.use(bodyParser.json());// POST: {"name":"foo","color":"red"}
app.use(bodyParser.urlencoded({extended:true}));// assuming POST:name=foo&color=red<--URL encoding

app.get('/',courseController.index);

    app.get('/addcourse',courseController.getAddCourse);

    app.post('/addcourse',courseController.postAddCourse);

    app.get('/viewcourse',courseController.getViewCourse);

    app.post('/deletecourse/:id',courseController.postDelete);
    
    app.get('/signup',userController.getSignUp);
    
    app.post('/signup',userController.postSignUp);

    app.post('/login', userController.getLogin);
// app.get('/viewcourse',function(req,res)
// {

// Course.find({},function()
// {
// });
// });

// Mongoose Connection with MongoDB
mongoose.connect("mongodb://localhost/codegurukul");
console.log("local mongodb opened");

// var fetchCourse=Course.find();//retrieve all the values 

// app.get('/login',function(req,res)
// {

// res.render('login');

// });
//req=>request res=>response

app.listen(3020);
console.log("Express Server is listening at port 3020");
