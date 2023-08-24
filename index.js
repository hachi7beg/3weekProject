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
}

window.onload = () => {
  const table = document.getElementById("table");
  console.log(table); // ??
};
