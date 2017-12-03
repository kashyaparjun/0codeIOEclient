var id = "dev1";
var pass = "pass";
var callString = `https://ocodeioe.herokuapp.com/?id=${id}&pass=${pass}`;
var socket = require("socket.io-client")(callString);
function doFunction(args){
    console.log(args);
}
socket.on(id+pass, (data) => {
    doFunction(data);
});