export default class Seat {
  parent = null;
  box = null;
  constructor({ parent, status, rowIdx, colIdx }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.parent.append(this.box);
    this.state = status;
    this.rowIdx = rowIdx;
    this.colIdx = colIdx;

    this.render();
    this.addEvent();
  }
  addEvent() {
    this.box.addEventListener("click", (e) => {
      console.log(this.state);
      console.log(e.target);
      let nextState = 0;
      if (this.state === 1) {
        return;
      } else if (this.state === 0) {
        nextState = 2;
      } else if (this.state === 2) {
        nextState = 0;
      }
      // const row = e.target.dataset.row;
      // const col = e.target.dataset.col;
      // if (this.state.seat[row][col] === 1) return;

      // if (this.state.seat[row][col] === 0) {
      //   this.state.seat[row][col] = 2;
      // } else if (this.state.seat[row][col] === 2) {
      //   this.state.seat[row][col] = 0;
      // }
      // this.setState({ seat: this.state.seat });
      console.log(nextState);
      this.setState(nextState);
    });
  }
  setState(status) {
    this.state = status;
    this.render();
  }
  render() {
    const status = this.state;
    console.log(status);
    let inner = ``;
    if (status === 0) {
      inner = `<div class="empty" data-row="${this.rowIdx}" data-col="${this.colIdx}"></div>`;
    } else if (status === 1) {
      inner = `<div class="impossible" data-row="${this.rowIdx}" data-col="${this.colIdx}"></div>`;
    } else if (status === 2) {
      inner = `<div class="selected" data-row="${this.rowIdx}" data-col="${this.colIdx}"></div>`;
    }
    this.box.innerHTML = inner;
  }
}
