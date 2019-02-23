# @nokizorque/node-queue

A simple queue system for Node.js

## Install

```
$ npm i @nokizorque/node-queue
```

## Usage

```js
let NodeQueue = require("@nokizorque/node-queue");
queue.push("hello-world", () => {
	console.log("Hello World!");
});
queue.next();

//=> Hello World!
```

Or refer to `test.js`

## Todo

Add support for timers, and more configuration options (auto-run, event system, etc).