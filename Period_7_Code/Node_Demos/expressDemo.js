var express = require("express")();
var http = require("http").Server(express);

express.get('/',function(request, response){
    response.write("Hi there. Welcome.");
    response.end();
})
exports.get("/Lab1/",function(request, response){
    
    //stuff for lab 1
    //something like response.sendFile()
})

http.listen(process.env.PORT, process.env.IP, function(){
    console.log("someone arrived")
})