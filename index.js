class NodeQueue {
	constructor() {
		this.jobs = [];
		this.running = false;
	};

	push(name, func) {
		return !(!(this.jobs.push({name: name, func: func})));
	};

	indexOf(name) {
		let ind;
		if (this.jobs.length < 1) {
			return;
		}
		for (let i = 0; i < this.jobs.length; i++) {
			if (this.jobs[i].name === name) {
				ind = i;
			}
		}
		return ind;
	};

	accelerate(ind) {
		if (this.jobs.length < ind || this.jobs.length < 1 || this.running) {
			return;
		}
		this.running = true;
		let res = !(!(this.jobs.unshift(this.jobs.splice(ind, 1)[0])));
		this.running = false;
		return res;
	};

	remove(ind) {
		if (this.jobs.length < ind || this.jobs.length < 1 || this.running) {
			return;
		}
		this.running = true;
		let res = !(!(this.jobs.splice(ind, 1)));
		this.running = false;
		return res;
	};

	exec(ind) {
		if (this.jobs.length < ind || this.jobs.length < 1 || this.running) {
			return;
		}
		this.running = true;
		let res = this.jobs[ind].func();
		this.running = false;
		this.remove(ind);
		return res;
	};

	next() {
		if (this.jobs.length < 1 || this.running) {
			return;
		}
		return this.exec(0);
	};

	clear() {
		this.jobs = [];
		this.running = false;
	};
};

module.exports = NodeQueue;