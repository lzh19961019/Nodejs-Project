var express = require('express');
var router = express.Router();
var userSchema = require('../public/common/user');

var mongoose = require('mongoose');

/*插入数据库函数*/
function insert(name,psw){
    var user=new userSchema({
        username : name,
        userpsw : psw,
        logindate : new Date()
    });
    console.log(user)
    user.save(function(err,res){
        if(err){
            console.log(err)
        }
        else{
            console.log(res);
        }
    })
}

/*注册页面数据接收*/
router.get('/', function (req, res) {
  //先查询有没有这个user
  console.log("req.query"+req.query);
  var UserName = req.query.username;
  var UserPsw = req.query.password;
  //通过账号验证
  var updatestr = {username: UserName};
   res.setHeader('Content-type','application/json;charset=utf-8')
    console.log(updatestr);
    userSchema.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(obj.length == 0){
                //如果查出无数据,就将账户密码插入数据库
                insert(UserName,UserPsw); 
                //返回数据到前端
                res.send({status:'success',message:'true'}) 
            }else{
                res.send({status:'success',message:'false'}) 
            }
        }
    })  
});

module.exports = router;