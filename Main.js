var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();
 
router.get('/message',function(req,res){
  res.json({"error" : false, "message" : "Hello OOW!"}); // Change OOW to your name here....
});
 
router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});
 
app.use('/',router);
 
app.listen(80,function(){
  console.log("Listening at PORT 80");
})