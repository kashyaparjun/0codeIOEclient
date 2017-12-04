//define your id and password here
var id = "dev1";
var pass = "pass";

//start coding here
//var Gpio = require('onoff').Gpio;
//var LED = new Gpio(4, 'out');

//default function, let it stay. data contains the input from the web socket
function input(data){
    /*console.log(data);
    if(data.led == 0){
        LED.writeSync(0);
    }
    else{
        LED.writeSync(1);
    }*/
    console.log(data);
}


//do not touch these
module.exports.input = input;
module.exports.id = id;
module.exports.pass = pass;
