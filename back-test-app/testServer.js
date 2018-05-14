const http=require('http');
const app=require('express')();
const request=require('request');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose');
Users= require('./usermodel');
Astronaut = require('./astromodel');
mongoose.connect('mongodb://testuser:testuser@ds219130.mlab.com:19130/sourcetest');
// const db=mongoose.connection;
http.createServer(app).listen(3000);
console.log('Server listen 3000');
function getRandom(min, max){
  return min+Math.floor(Math.random()*(max-min+1));
};

app.use('*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/api/astronauts',function (req,res) {
  request('http://api.open-notify.org/astros.json', function(err, response, body){
    let people=JSON.parse(body).people;
    for(val in people){
      Object.assign(people[val],{'weight': getRandom(50,80)});
      Object.assign(people[val],{'age': getRandom(30,60)});
      Astronaut.addAustronaut(people[val],function (error,man) {
        if(error)
          throw error;
      });
    }
  });
      Astronaut.getAustronauts(function (error,peoples) {
        if(error)
          throw error;
        res.json(peoples);
      });
  });
app.delete('/api/astronauts/:_id',function (req,res) {
  Astronaut.deleteAustronaut(req.params._id,function (error,_) {
    if(error)
      throw error;
    res.write('Ok');
    res.end();
  });
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
