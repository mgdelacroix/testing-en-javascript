var Calculator = function (initial) {
  this.value = initial || 0;
  this.record = [];
};

Calculator.prototype.add = function () {
  for(var i = 0; i < arguments.length; i++) {
    this.value += arguments[i];
    this.record.push({method: 'add', value: arguments[i]})
  }

  return this.value;
};

Calculator.prototype.sub = function () {
  for(var i = 0; i < arguments.length; i++) {
    this.value -= arguments[i];

    this.record.push({method: 'sub', value: arguments[i]})
  }

  return this.value;
};

Calculator.prototype.addRandom = function () {
  var min = 1000;
  var max = 2000;

  var num = Math.floor(Math.random() * (max - min + 1)) + min;

  return this.add(num);
};

Calculator.prototype.bigger = function (value) {
  return this.value < value;
};

Calculator.prototype.smaller = function (value) {
  return this.value > value;
};
