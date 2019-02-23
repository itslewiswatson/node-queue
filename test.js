let NodeQueue = require("./index.js");
let util = require("util");

let queue = new NodeQueue();
console.log(util.inspect(queue));

for (let i = 0; i < 2; i++) {
	queue.push("g" + i, function() {
		console.log(i);
	});
};

console.log(util.inspect(queue));
queue.accelerate(7);
queue.exec(5);
queue.remove(2);
queue.remove(queue.indexOf("g8"));
console.log(util.inspect(queue));
queue.next();
console.log(util.inspect(queue));
queue.clear();
console.log(util.inspect(queue));