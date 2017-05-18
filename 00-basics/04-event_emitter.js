const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myEvent', (message) => {
	console.log(message);
});

emitter.once('myEvent', (message) => {
	console.log('first time');
});

emitter.emit('myEvent', 'Im a event emitter');
emitter.emit('myEvent', 'second time');

emitter.removeAllListeners(['myEvent'])
emitter.emit('myEvent', 'third time');
