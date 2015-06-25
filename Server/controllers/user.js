var User = require('../models/User');

exports.getSignUp=function(req,res){
            res.render('signup');
};

exports.postSignUp=function(req,res)
{

var user = new User ({name: req.body.name, username:req.body.username, password:req.body.password});
        //The Magic!
        user.save(function(err){
            User.find(function(err,user){
            res.render('signup',{users:user});
        });
        });
};

exports.getLogin=function(req,res){
        User.findOne({username:req.body.username},function(err, user){
            if(err)
            {
                console.log(err);
            }
            if(user){
                if(user.password == req.body.password)
                    {
                        res.send("Valid User");
                    }
                else
                     {
                        res.send("Invalid User");
                    }
            }
        })
    };


