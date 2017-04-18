var express = require("express");
var app=express();
var http = require("http").Server(app);

app.use(express.static("."))
app.get('/',function(request, response){
    response.sendFile(__dirname + '/FirstWebPage.html');
})

http.listen(process.env.PORT, process.env.IP, function(){
    console.log("someone arrived")
})