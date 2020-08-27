const express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/greyscale', function (req, res) {
    res.sendFile( __dirname + "/" + "zoomable_knowledge_graph_greyscale.html" );
})

app.get('/wrap', function (req, res) {
    res.sendFile( __dirname + "/" + "zoomable_knowledge_graph_text_wrap.html" );
})

app.get('/*', function (req, res) {
    res.sendFile( __dirname + "/" + "zoomable_knowledge_graph.html" );
})

var server = app.listen( process.env.PORT || 8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})
