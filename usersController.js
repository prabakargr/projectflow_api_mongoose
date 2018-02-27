var User=require('./userModel');

var getusers=function(req,res){
    User.find(function(err,users){
        if(err){
            res.send('cannot get users')
        }else{
            res.send(users);
        }
    })
}



module.exports={
    getusers:getusers,
}