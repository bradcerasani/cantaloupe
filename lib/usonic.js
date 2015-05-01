var usonic = require('r-pi-usonic');
var statistics = require('math-statistics');

var config = {
  echoPin: 24,
  triggerPin: 23,
  timeout: 750,
  delay: 60,
  rate: 5
};

function print(distances) {
  var distance = statistics.median(distances);

  console.log(distance);
}

// TO DO - add programatic way to stop function
function initSensor(options) {
  var sensor = usonic.createSensor(options.echoPin, options.triggerPin, options.timeout);

  var distances;

  (function measure() {
    if (!distances || distances.length === options.rate) {
      if (distances) {
        print(distances);
      }

      distances = [];
    }

    setTimeout(function() {
      distances.push(sensor());

      measure();
    }, options.delay);
  }());
}

initSensor(config);
