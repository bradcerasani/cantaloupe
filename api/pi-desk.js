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

// Target desk height
var targetHeight = 93;

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

function print(distances) {
  var distance = statistics.median(distances);

  console.log(distance);

  // TO DO - add reasonable amount of variance for stop/start time
  if (distance > targetHeight) {
    deskDown();
  } else {
    deskStop();
  };
};

// TO DO - add programatic way to stop function
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