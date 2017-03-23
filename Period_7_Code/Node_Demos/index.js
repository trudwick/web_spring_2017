var http = require("http");
http.createServer(function(request, response){
    console.log("Someone asked for me.");
    response.write("Hi back.")
    response.end();
}).listen(process.env.PORT, process.env.IP)