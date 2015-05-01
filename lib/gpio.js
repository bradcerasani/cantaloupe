var gpio = require('r-pi-gpio');

var config = {
  relayCom: 21,
  relayDir: 20
};

// Relay control
var relayCom = gpio.createOutput(config.relayCom);
var relayDir = gpio.createOutput(config.relayDir);

module.exports = {
  deskUp: function() {
    relayCom(false);
    relayDir(true);
  },

  deskDown: function() {
    relayCom(false);
    relayDir(false);
  },

  deskStop: function() {
    relayCom(true);
    relayDir(true);
  }
};
