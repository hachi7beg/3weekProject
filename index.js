class Timer {
  constructor() {
    this.active = false;
    this.intervalId;
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
  getValues(){
    return this.values
  }
}

window.onload = () => {
  const table = document.getElementById("table");
  console.log(table); // ??
  const getValue = new Square().getValues()
  console.log(getValue)
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
};
