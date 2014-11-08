var ACCOUNT_ID = "ACe76e2abefb343010d758c22db173f17b";
var AUTH_TOKEN = "78fdee52495d5d9cd34790f42250c6f4";

var twilio = require("twilio")(ACCOUNT_ID, AUTH_TOKEN);

twilio.sendMessage({

    to:"+13392039378",
    from: "+17069565083",
    body: "word to your mother."

})
.then(function(data)
{
    console.log("success!");
},
function(error)
{
    console.error("failure.");
    console.error(error);
});