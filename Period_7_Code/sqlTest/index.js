var express = require("express");
var app = express();
var http = require("http").Server(app);
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('day1Test.db');

//Set up display HTML
app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/takeNewCandy",function(req, res){
    console.log(req.query);
    res.end("New Candy Received");
    
    //code to insert into db
    db.each("SELECT * FROM STUDENTS", function(err, row){
        if(!err){
            // console.log(row);
            console.log("Name:"+row["NAME"]);
        }
    })
    
    db.close();
})

//Start our server
http.listen(process.env.PORT, process.env.IP, function(){
    console.log("Our server has started");
})
//The following is test code when the server starts