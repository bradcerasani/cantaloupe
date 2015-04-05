var gpio = require('r-pi-gpio');
var usonic = require('r-pi-usonic');

var config = {
  relayCom: 21,
  relayDir: 20,
  echoPin: 24,
  triggerPin: 23
};

// Ultrasonic sensor
var sensor = usonic.createSensor(config.echoPin, config.triggerPin, 400);
var distance = sensor();

// Relay control
var relayCom = gpio.createOutput(config.relayCom);
var relayDir = gpio.createOutput(config.relayDir);

relayCom(true);
relayDir(true);