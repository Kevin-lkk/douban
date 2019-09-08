
var experss = require("express");
var app = experss();
app.get("/get",function(req,res){
    res.sent("get");
})
app.get("/get",function(req,res){
    res.sent("get");
})
app.listen(3000);