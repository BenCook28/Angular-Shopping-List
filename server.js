// use express to run the app on http
var express = require('express');
var app = express();
var http = require('http').Server(app);

//directory starts on the same level as index.html
app.use(express.static(__dirname));
//request and respond, the document is index.html
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})
// use the chosen port or port 3000
http.listen(process.env.PORT || 3000, function(){
	console.log("the application is listening on port 3000");
})