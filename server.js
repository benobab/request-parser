var express = require("express");

var app = express();

app.get('/',function(req,res){
    var json = {};
    console.log(req.headers);
    
    //Get the IP address
    json["ipaddress"] = req.headers['x-forwarded-for'];
    //Get the language
    json["language"] = req.headers["accept-language"];
    //Get the software
    var userA = req.headers["user-agent"];
    userA = userA.substr(userA.indexOf('(') + 1,userA.length);
    console.log(userA);
    userA = userA.substr(0,userA.indexOf(')') -1);
    console.log(userA);
    json["software"] = userA;
    console.log(JSON.stringify(json));
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(json));
});

app.listen(8080,function(){
    console.log("App running on 8080");
});
