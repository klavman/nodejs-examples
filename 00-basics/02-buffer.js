/*
https://nodejs.org/docs/latest-v4.x/api/buffer.html#buffer_new_buffer_array
*/

const buf1 = new Buffer(100);
const buf2 = new Buffer(20);

const str = "\u1011";

buf1.write("foo", 0, "ascii");

console.log(buf1.toString("ascii"));

console.log(str, Buffer.byteLength(str, "utf8"));