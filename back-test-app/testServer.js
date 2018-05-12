const http=require('http');
const app=require('express')();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose');
Users= require('./usermodel');
mongoose.connect('mongodb://admin:1@ds149763.mlab.com:49763/beersheva2017');
// const db=mongoose.connection;
http.createServer(app).listen(3000);
console.log('Server listen 3000');
app.use('*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/admin',function(req,res){
    console.log(req.query);
    res.write('Hello admin '+req.query.name+' age '+req.query.age);
    res.end();
});
app.get('/api/users',function (req,res) {
    Users.getUsers(function (error,users) {
        if(error)
            throw error;
        res.json(users);
    });
});
app.get('/api/users/:_id',function (req,res) {
    Users.getUserById(req.params._id,function (error,user) {
        if(error)
            throw error;
        res.json(user);
    });
});
app.post('/api/users',function (req,res) {
    let user=req.body;
    Users.addUser(user,function (error,user) {
        if(error)
            throw error;
        res.json(user);
    });
});
app.put('/api/users',function (req,res) {
    let user=req.body;
    Users.updateUser(user,function (error,user) {
        if(error)
            throw error;
        res.json(user);
    });
});
app.delete('/api/users/:_id',function (req,res) {
    Users.deleteUser(req.params._id,function (error,_) {
        if(error)
            throw error;
        res.write('Ok');
        res.end();
    });
});
