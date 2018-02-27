var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var userModel=new Schema({
    username:String,
    email:String,
    password:String,
    role:String,
    company:String,
    firstname:String,
    lastname:String,
    city:String,
    postalcode:String,
    aboutme:String

});



module.exports=mongoose.model("alluser",userModel);