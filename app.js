const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Paginas')));


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "Paginas", "front.html"));
});

app.get("/desafio.html", function(req, res){
    res.sendFile(path.join(__dirname, "Paginas", "desafio.html"));
});


app.get("/desafio2.html", function(req, res){
    res.sendFile(path.join(__dirname, "Paginas", "desafio2.html"));
});



app.listen(3000, '0.0.0.0', function() {
    console.log("Servidor rodando em http://localhost:3000/");
});
