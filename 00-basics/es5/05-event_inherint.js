'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = require('events');

var Clock = exports.Clock = function (_EventEmitter) {
  _inherits(Clock, _EventEmitter);

  function Clock() {
    _classCallCheck(this, Clock);

    return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this));
  }

  _createClass(Clock, [{
    key: 'theTime',
    value: function theTime() {
      var date = new Date();
      var hrs = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      var msg = hrs + ':' + min + ':' + sec;
      console.log(msg);
    }
  }, {
    key: 'write',
    value: function write(data) {
      var _this2 = this;

      setInterval(function () {
        _this2.emit(data);
      }, 1000);
    }
  }]);

  return Clock;
}(EventEmitter);

var clock1 = new Clock();

clock1.write('cucu');
clock1.on('cucu', function () {

  clock1.theTime();
});