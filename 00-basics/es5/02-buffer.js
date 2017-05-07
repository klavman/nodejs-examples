"use strict";

/*
https://nodejs.org/docs/latest-v4.x/api/buffer.html#buffer_new_buffer_array
*/

var buf1 = new Buffer(100);
var buf2 = new Buffer(20);

var str = "\u1F98";

buf1.write("foo", 0, "ascii");

console.log(buf1.toString("ascii"));

console.log(str);