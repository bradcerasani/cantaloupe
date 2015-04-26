'use strict';

var gpio = require('r-pi-gpio');
var usonic = require('r-pi-usonic');
var statistics = require('math-statistics');

var config = {
  relayCom: 21,
  relayDir: 20,
  echoPin: 24,
  triggerPin: 23,
  timeout: 750,
  delay: 60,
  rate: 5
};

function print(distances) {
  var distance = statistics.median(distances);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  if (distance < 0) {
    process.stdout.write('Error: Measurement timeout.');
  } else {
    process.stdout.write('Distance: ' + distance.toFixed(2) + ' cm');
  }
};

function initSensor(config) {
  var sensor = usonic.createSensor(config.echoPin, config.triggerPin, config.timeout);

  var distances;

  (function measure() {
    if (!distances || distances.length === config.rate) {
      if (distances) {
        print(distances);
      }

      distances = [];
    }

    setTimeout(function () {
      distances.push(sensor());

        measure();
      }, config.delay);
  }());
};

initSensor(config);

// Relay control
// var relayCom = gpio.createOutput(config.relayCom);
// var relayDir = gpio.createOutput(config.relayDir);

// relayCom(true);
// relayDir(true);