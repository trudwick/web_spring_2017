var express = require("express");
var app = express();
var http = require("http").Server(app)
var io = require("socket.io")(http)

//app.get
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})
//Socket Functionality
io.on('connection',function(socket){
    //socket.on("")
    console.log("hji")
    socket.on("testMessage", function(data){
        console.log(data)
        io.emit("msgToClient",data)
    })
    //socket listen for button clicked
})
////;start our server
http.listen(process.env.PORT, function(){
    console.log("server started")
})