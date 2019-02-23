# @nokizorque/node-queue

[![npm (scoped)](https://img.shields.io/npm/v/@nokizorque/node-queue.svg)](https://www.npmjs.com/package/@nokizorque/node-queue) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@nokizorque/node-queue.svg)](https://www.npmjs.com/package/@nokizorque/node-queue) ![NPM](https://img.shields.io/npm/l/@nokizorque/node-queue.svg)

A simple queue system for Node.js

## Install

```
$ npm i @nokizorque/node-queue
```

## Usage

```js
let NodeQueue = require("@nokizorque/node-queue");
let queue = new NodeQueue();

queue.push("hello-world", () => {
	console.log("Hello World!");
});
queue.next();

//=> Hello World!
```

Or refer to `test.js` in the root directory

## Todo

Add support for timers, and more configuration options (auto-run, event system, etc).