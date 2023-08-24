# Create a Number Roulette

Use what you have learned so far to create a roulette of numbers!
You have `index.html` and `index.js` in this folder, and `index.html` is already implemented for you. Let's take a look at these files and solve the exercises below.

## Base Requirements

In this section, let's create a matrix in `index.html`.

1. Open `index.html` in a browser. What do you see in a screen and in a console respectively?
1. What is the role of `window.onload` used in `index.js`? What would be the problem if this function is not used?
1. Implement a method `getValues` in `Square` class. This function takes no parameters and returns `values` in the instance.
1. Create an instance of `Square` inside the function assigned to `window.onload`, and print its `values` in the console.
1. Display `Square`'s `values` as a matrix in a table tag in `index.html`. Each row should be grouped by `td` tag, and each element of `values` should be represented as `td` tag.
1. Add `id` in each `td` tag. The following is the expected output in a table tag.

```html
<table id="table">
  <tr>
    <td id="cell-0">1</td>
    <td id="cell-1">2</td>
    <td id="cell-2">3</td>
  </tr>
  <tr>
    <td id="cell-3">4</td>
    <td id="cell-4">5</td>
    <td id="cell-5">6</td>
  </tr>
  <tr>
    <td id="cell-6">7</td>
    <td id="cell-7">8</td>
    <td id="cell-8">9</td>
  </tr>
</table>
```

## Intermediate Requirements

In this section, let's make our timer work!

1. First, implement a tentative method `start` in `Timer` class and print `this.active` in the method. Also, implement a method `startTimer` in `Square` class. How can we call `Timer`'s `start` method when pressing a `Start` button in a browser?
   - **Hint**: How does `this` keyword work? How can we bind `this` to the value you expect to be?
1. Next, let's properly implement a method `start` in `Timer` class. It should:
   - start a timer when you press `start` button in a browser.
   - set the background color of the randomly chosen cell to `#FFA500` every 100ms.
   - not choose the same cell as the one that was chosen 100ms ago.
   - revert the background color of the other cells to `#FFF` every 100ms.
1. Implement a method `stop` in `Timer` class. It should:
   - pause a timer when you press `stop` button in a browser.
   - prevent all the cells from changing the background color after the timer stops
   - not throw any error and function as expected even if you have not pressed `start` button.
   - not throw any error and function as expected even if you have pressed `start` button multiple times.
   - not throw any error and function as expected even if you press `stop` button multiple times.
   - not prevent you from starting a timer again by pressing `start` button.
1. Implement a method `reset` in `Timer` class.
   - reset a timer when you press `reset` button in a browser.
   - revert the background color of the other cells to `#FFF` every 100ms.
   - not throw any error and function as expected after you have pressed only `start` button.
   - not throw any error and function as expected after you have pressed `start` and `stop` buttons.
   - not throw any error and function as expected even if you have pressed `start` button multiple times.
   - not throw any error and function as expected even if you press `reset` button multiple times.
   - not prevent you from starting a timer again by pressing `start` button.
1. Finally, let's make our way of making a roulette more flexible. Remove the code that defines `values` in `Square`'s constructor, and implement the code that satisfies the following requirements:
   - Modify our `Square` class so that it takes two parameters `row` and `col` when we instantiate it.
   - Every time you refresh a browser, it should display a `row`x`col` matrix in a browser.
   - Every time you refresh a browser, a number in each cell should be randomly set.
   - Numbers in the cells should be unique.
   - Define the max value of the number of cells. If the given `row` and `col` are to make a matrix, the size of which is larger than the expected max value, `Square` class should print an error message in the console and create the empty matrix instead.

```js
class Square {
  constructor(row, col) {
    // Comment out this part.
    // this.values = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    // ];
    this.values = ??? // Use row and col!
  }
  ...
}
```

## Advanced Requirements

In this section, we want you to be creative!

1. Modify our code so that every time you stop a timer, the record of the cell that has orange background remains.
   - When you restart a timer, the background color of that cell should turn to red, and it should be excluded from the potential orange cells.
   - If all the cells turn to red, `start` and `start` buttons in a browser should be disabled.
   - When you reset a timer, the background color of all the cells should turn to `#FFF`.
1. Modify `index.html` by adding more CSS so that it looks fantastic!

## Nightmare Requirements

1. Change our number roulette into a bingo game!
   - You should be able to win by stopping at all the cells in one row, column, or diagonal.
   - Define the max number of how many times a player can start/restart a timer.
   - How to display win and lose is up to you!
