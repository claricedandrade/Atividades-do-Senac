var express = require("express");
var app = express();

app.get("/", function (res,res)
{
    res.sendFile(__dirname + "/pasta.html");
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/sobre.html")
});

app.get("/blog", function (req,res){
    res.send("Bem-vindo ao meu blogkkkkkk")
});

app.listen(8338, function(){
    console.log("Servidor Rodando na url http:localhost:8338")
});

