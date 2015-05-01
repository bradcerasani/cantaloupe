var gpio = require('r-pi-gpio');

var config = {
  relayCom: 21,
  relayDir: 20
};

// Relay control
var relayCom = gpio.createOutput(config.relayCom);
var relayDir = gpio.createOutput(config.relayDir);

// TO DO - refactor desk move functions into method lookup
function deskUp() {
  relayCom(false);
  relayDir(true);
}

function deskDown() {
  relayCom(false);
  relayDir(false);
}

function deskStop() {
  relayCom(true);
  relayDir(true);
}
