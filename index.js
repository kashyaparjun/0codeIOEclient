var methods = require('./methods_here');
var id = methods.id;
var pass = methods.pass;
var callString = `https://ocodeioe.herokuapp.com/?id=${id}&pass=${pass}`;
var socket = require("socket.io-client")(callString);
socket.on(id+pass, (data) => {
    methods.input(data);
});