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

/*登录处理*/
router.get('/', function (req, res, next) {
    //先查询有没有这个user
    console.log("req.body"+req.query);
    var UserName = req.query.username;
    var UserPsw = req.query.password;
    //通过账号密码搜索验证
    var updatestr = {username: UserName,userpsw:UserPsw};
      res.setHeader('Content-type','application/json;charset=utf-8')
      console.log(updatestr);
      userSchema.find(updatestr, function(err, obj){
          console.log(obj);
          if (err) {
              console.log("Error:" + err);
          }
          else {
              if(obj.length == 1){
                  console.log('登录成功')
                  res.send({status:'success',message:'true'}) 
              }else{
                  console.log('请注册账号'); 
                  res.send({status:'success',message:'false'}) 
              }
          }
      })
  });
  

module.exports = router;