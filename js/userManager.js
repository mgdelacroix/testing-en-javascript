var UserManager = function () {
  this.users = [];
  this.log = [];
  this.onAddCallback;
  this.logEnabled = true;
};

UserManager.prototype.addLog = function (text) {
  this.log.push(text);
};

UserManager.prototype.get = function () {
  return this.users;
};

UserManager.prototype.onAdd = function (callback) {
  this.onAddCallback = callback;
};

UserManager.prototype.remove = function (name) {
  for (var i = 0; i < this.users.length; i++) {
    if (name === this.users[i]) {
      this.users.splice(i, 1);
    }
  }
};

UserManager.prototype.add = function (name) {
  if (Validator.startWith(name, 'a')) {
    return false;
  }

  this.users.push(name);

  if (this.logEnabled) {
    this.addLog(name + ' added');
  }

  if (this.onAddCallback) this.onAddCallback();

  return true;
};

UserManager.prototype.loadRemoteUsers = function () {
  $.get('/users', function (data) {
    this.users = data;
  }.bind(this));
};

UserManager.prototype.sync = function (callback, time) {
  time = time || 0;

  var launchSync = function() {
    $.post('/success', this.users, callback);
  }.bind(this);

  if (time > 0) {
    setTimeout(launchSync, time);
  } else {
    launchSync();
  }
};

var Validator = (function () {
  return {
    startWith: function (str, letter) {
      return str.charAt(0) === letter
    }
  }
})();
