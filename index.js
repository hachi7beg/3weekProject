class Timer {
  constructor() {
    this.active = false;
    this.intervalId;
    this.remberNum = 0;
  }
  start =(num) => {
    if(!this.active){
      this.intervalId = setInterval(this.randomCellNum, 100, num)
      this.active = true
      console.log(this.intervalId)
    }
  }
  randomCellNum =(cellnum) =>{
  const randomNum = Math.floor(Math.random()*cellnum)
  if (this.remberNum == randomNum){
      this.randomCellNum(cellnum)
  }else{
      document.getElementById("cell-"+ randomNum).style.backgroundColor = "#FFA500"
      document.getElementById("cell-"+ this.remberNum).style.backgroundColor = "#FFF"
      this.remberNum = randomNum
  }
  }
  stop = () => {
    if (this.active && this.intervalId!=0) {
      clearInterval(this.intervalId)
      this.intervalId=0
    }
  }
  reset = () => {
    if (this.intervalId == 0 && this.active){
      document.getElementById("cell-"+ this.remberNum).style.backgroundColor = "#FFF"
      this.active = false
    }
  }

}

class Square {
  constructor() {
    this.values = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    this.timer = new Timer();
  }
  getValues = () => {
    return this.values
  }
  startTimer = () => {
    this.timer.start(9)
  }
  stopTimer = () => {
    this.timer.stop()
  }
  resetTimer = () => {
    this.timer.reset()
  }
}

window.onload = () => {
  const startButton = document.getElementById("start");
  const table = document.getElementById("table");
  console.log(table); // ??
  const square = new Square()
  const getValue = square.getValues()
  console.log(getValue)
  createTableElement(getValue, table)
  startButton.addEventListener("click", square.startTimer)
  const stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", square.stopTimer)
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", square.resetTimer)
};

function createTableElement(getValue, table){
  for (value of getValue){
    const tr = document.createElement("tr")
    for (num of value){
        const td = document.createElement("td")
        td.innerText = num
        td.id = "cell-" + String(num-1)
        tr.append(td)
    }
    table.append(tr)
  }
}
