var express = require('express');
var router = express.Router();
var mgd = require('../public/common/mgd')
/* GET home page. */
router.get('/', function(req, res, next) {
  let start = req.query.start-0;
  let count = req.query.count-0;
  mgd({
    dbName:'user',
    collection:'goods'
  },
  (goods,client)=>{
    goods.find({},{limit:count,skip:start*count}).toArray((err,result)=>{
      console.log(res);
      res.send(result)
      client.close();
    })
  })
});

module.exports = router;
