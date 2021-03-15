import Control from "./Control.js";
import Hall from "./Hall.js";
import Legend from "./Legend.js";

export default class App {
  target = null;
  constructor(target) {
    this.target = target;

    this.legend = new Legend({ parent: target });
    this.hall = new Hall({ parent: target });
    this.control = new Control({
      parent: target,
      onReserve: () => {
        this.onReserve();
      },
    });
  }
  onReserve() {
    const { seat } = this.hall.getState();
    const result = [];
    for (let i = 0; i < seat.length; i += 1) {
      for (let j = 0; j < seat[i].length; j += 1) {
        if (seat[i][j] === 2) {
          result.push(`${i + 1}행${j + 1}열`);
        }
      }
    }
    alert(result);
  }
}
