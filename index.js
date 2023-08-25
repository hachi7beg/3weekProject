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
  constructor(cellNumberData) {
    // this.values = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    // ];
    this.value = cellNumberData
    this.timer = new Timer();
  }
  getValues = () => {
    return this.value
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
  const maxsize = 50;
  const ratio = 5
  const rowlength = Math.floor(Math.random()*maxsize/ratio +1);
  const collength = Math.floor(Math.random()*maxsize/ratio +1);
  const cellNumberArr = createArry(rowlength,collength)
  arrayShuffle(cellNumberArr)
  const cellNumberData = splitArray(cellNumberArr,rowlength);
  const square = new Square(cellNumberData)
  const getValue = square.getValues()

  startButton.addEventListener("click", square.startTimer)
  const stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", square.stopTimer)
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", square.resetTimer)

  if (maxsize >= rowlength*collength){    
    createTableElement(getValue, table)
  } else {
    console.log("the size of which is larger than the expected max value")
  }
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

function createArry(rowlength, collength){
  const arr =[]
  for (var i=1; i<=rowlength*collength; i++ ){
    arr.push(i)
  }
  return arr
}

function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function splitArray(array, part) {
  var tmp = [];
  for(var i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
  }
  return tmp;
}