const mongoose=require('mongoose');

const usersSchema= mongoose.Schema({
    "Name": {type:String, require: true},
    "Email": {type:String, require: true},
    "Phone number": {type:String, require: true},
    "Address": {type:String, require: true},
    "Image URL": {type:String, require: true}
});

const Users=module.exports=mongoose.model('Users',usersSchema);
module.exports.getUsers=function(callback,limit){
    Users.find(callback).limit(limit);
};
module.exports.getUserById=function(id,callback){
    Users.findById(id,callback);
};
module.exports.addUser=function(user,callback){
    Users.create(user,callback);
};
module.exports.updateUser=function(user,callback){
    Users.findById(user._id,function (err,doc) {
        if(err)
            throw err;
        Object.assign(doc,user);
        doc.save(callback);
    });
};
module.exports.deleteUser=function(id,callback){
    Users.findByIdAndRemove(id,callback);
};
