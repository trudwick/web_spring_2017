var express = require("express")();
var http = require("http").Server(express);

express.get('/',function(request, response){
    
})

http.listen(process.env.PORT, process.env.IP, function(){
    console.log("someone arrived")
})