'use strict';

var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('myEvent', function (message) {
	console.log(message);
});

emitter.once('myEvent', function (message) {
	console.log('first time');
});

emitter.emit('myEvent', 'Im a event emitter');
emitter.emit('myEvent', 'second time');

emitter.removeAllListeners(['myEvent']);
emitter.emit('myEvent', 'third time');