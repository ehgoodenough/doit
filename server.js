
var ACCOUNT_ID = "ACe76e2abefb343010d758c22db173f17b";
var AUTH_TOKEN = "78fdee52495d5d9cd34790f42250c6f4";

var express = require("express")();
var twilio = require("twilio")(ACCOUNT_ID, AUTH_TOKEN);

express.get("/", function(request, response)
{
	response.sendFile(__dirname + "/index.html");
});

express.get("/doit", function(request, response)
{
	response.sendFile(__dirname + "/resrc/Main.html");
});

express.get("/notify-by-text", function(request, response)
{
	var task = request.query.task;

	twilio.sendMessage(
	{
	    to:"+13392039378",
	    from: "+17069565083",
	    body: "DO IT! " + task
	})
	.then(function(data)
	{
	    //console.log("success!");
	},
	function(error)
	{
	    //console.error("failure.");
	    console.error(error);
	});

	response.send(200);
});

express.use(require("express").static(__dirname + "/resrc"));
express.listen(8080);