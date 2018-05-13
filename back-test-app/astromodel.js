const mongoose=require('mongoose');

const astronautSchema= mongoose.Schema({
    "name": {type:String, require: true},
    "craft": {type:String, require: true},
    "weight": {type:String, require: true},
    "age": {type:String, require: true}
});

const Austronaut=module.exports=mongoose.model('Austronaut',astronautSchema);
module.exports.getAustronauts=function(callback,limit){
  Austronaut.find(callback).limit(limit);
};
module.exports.getAustronautById=function(id,callback){
  Austronaut.findById(id,callback);
};
module.exports.addAustronaut=function(astronaut,callback){
  Austronaut.create(astronaut,callback);
};
module.exports.updateAustronaut=function(astronaut,callback){
  Austronaut.findById(astronaut._id,function (err,doc) {
        if(err)
            throw err;
        Object.assign(doc,astronaut);
        doc.save(callback);
    });
};
module.exports.deleteAustronaut=function(id,callback){
  Austronaut.findByIdAndRemove(id,callback);
};
