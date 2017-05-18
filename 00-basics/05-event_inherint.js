const EventEmitter = require('events');

export class Clock extends EventEmitter {
  constructor() {
    super();
  }

  theTime() {
  	var date = new Date();
  	var hrs = date.getHours();
  	var min = date.getMinutes();
  	var sec = date.getSeconds();

  	var msg = `${hrs}:${min}:${sec}`;
  	console.log(msg);
  }

  write(data) {
  	setInterval( () => {
  		this.emit(data);
  	}, 1000);
   
  }
}

const clock1 = new Clock();

clock1.write('cucu');
clock1.on('cucu', () => {

	clock1.theTime();
});