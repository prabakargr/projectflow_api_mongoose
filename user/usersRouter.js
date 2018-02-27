var express=require('express');

var usersController=require('./usersController');

var usersRouter=express.Router();

usersRouter.route('/getuser')
.get(usersController.getusers);


module.exports=usersRouter;