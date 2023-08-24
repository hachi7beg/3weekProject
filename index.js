class Timer {
	constructor() {
		this.active = false;
		this.intervalId;
		this.prevIdx = 0;
	}
	start = (num) => {
		if (!this.active) {
			this.intervalId = setInterval(this.changeCellColor, 100, num);
			this.active = true;
		}
	};
	changeCellColor = (numOfCell) => {
		const idx = Math.floor(Math.random() * numOfCell);
		if (this.prevIdx == idx) {
			this.changeCellColor(numOfCell);
		} else {
			document.getElementById("cell-" + idx).style.backgroundColor = "#FFA500";
			document.getElementById("cell-" + this.prevIdx).style.backgroundColor =
				"#FFF";
			this.prevIdx = idx;
		}
	};
	stop = () => {
		if (this.active && this.intervalId != 0) {
			clearInterval(this.intervalId);
			this.intervalId = 0;
		}
	};
	reset = () => {
		if (this.intervalId == 0 && this.active) {
			document.getElementById("cell-" + this.prevIdx).style.backgroundColor =
				"#FFF";
			this.active = false;
		}
	};
}

class Square {
	#maxNumberOfCell = 36;
	values = [];
	numOfCell = 0;
	constructor(row, col) {
		if (row * col > this.#maxNumberOfCell) {
			console.error(
				`Matrix size (row * col) must be smaller than or equal ${
					this.#maxNumberOfCell
				}!`
			);
		} else {
			this.numOfCell = row * col;
			const cellValueList = [...Array(this.numOfCell)].map((_, i) => i + 1);
			for (let i = 0; i < row; i++) {
				const list = [];
				for (let j = 0; j < col; j++) {
					const idx = Math.floor(Math.random() * cellValueList.length);
					list.push(cellValueList.splice(idx, 1)[0]);
				}
				this.values.push(list);
			}
		}
		this.timer = new Timer();
	}
	getValues = () => {
		return this.values;
	};
	startTimer = () => {
		this.timer.start(this.numOfCell);
	};
	stopTimer = () => {
		this.timer.stop();
	};
	resetTimer = () => {
		this.timer.reset();
	};
}

window.onload = () => {
	const table = document.getElementById("table");
	const startButton = document.getElementById("start");
	const stopButton = document.getElementById("stop");
	const resetButton = document.getElementById("reset");
	const square = new Square(6, 5);
	const matrix = square.getValues();
	createTableElement(matrix, table);
	startButton.addEventListener("click", square.startTimer);
	stopButton.addEventListener("click", square.stopTimer);
	resetButton.addEventListener("click", square.resetTimer);
};

function createTableElement(matrix, table) {
	for (row of matrix) {
		const tr = document.createElement("tr");
		for (num of row) {
			const td = document.createElement("td");
			td.innerText = num;
			td.id = "cell-" + String(num - 1);
			tr.append(td);
		}
		table.append(tr);
	}
}
