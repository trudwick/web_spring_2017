var express = require("express");
var app = express();
var http = require("http").Server(app);

// recieve requests
app.get("/",function(req, res){
    res.sendFile(__dirname+"/form.html")
})
app.get("/receiveData",function(req, res) {
    console.log(req.query);
    res.end("Your data has been received");
    //take the request and add to DB
    //Send all of our data back to the client.
})

// start our server
http.listen(process.env.PORT, process.env.IP, function(){
    console.log("the server has started");
})

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("day1Test.db");

db.each("SELECT * FROM Students",function(err, row){
    if(!err){
        // console.log(row);
        console.log(row.name+" is in grade "+row.grade)
    }
})