var express = require('express');
var mongoose = require('mongoose');
var  app = express(); 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var User = require('./model/user.js');
const PORT = 3000;
app.use(express.static('public'));

app.listen(PORT, function(){
    console.log('Server started on port:', +PORT);
});
//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/vt', function(err){
    if(err) console.log(err);
    console.log('Connected to DB');
});


// User registration

app.post('/register', urlencodedParser, function(req,res){
    name = req.body.Name;
    username = req.body.Phone;
    password = req.body.Password;
    var newUser = new User ({
        name: name,
        username: username,
        password:password,
    });

    newUser.save(function(err){
        if(err) res.send('Sorry problem to register.. Try after sometime.'); console.log(err);
        console.log('User saved successfully!')
        res.send('Yeah. you gottcha account with VT.');
    });
});
   
