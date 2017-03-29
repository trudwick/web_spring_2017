var http = require("http");
http.createServer(function(request, response){
    console.log("Someone knocked on the door");
    response.write("What's up? Welcome to my sweet webpage.")
    response.end();
}).listen(process.env.PORT, process.env.IP)