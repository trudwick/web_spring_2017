var express = require("express")
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//Set up display THML
app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",function(socket){
    console.log(socket);
    //recieve messages
    socket.on("buttonFromClient",function(data){
        console.log(data)
    })
})

//Start our server
http.listen(process.env.PORT, process.env.IP, function(){
    console.log("Our server has started");
})