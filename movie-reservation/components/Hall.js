import Seat from "./Seat.js";

export default class Hall {
  parent = null;
  box = null;
  constructor({ parent }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.parent.append(this.box);

    this.state = {
      seat: [
        [0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
      ],
    };

    this.render();
    this.addEvent();
  }
  addEvent() {
    this.box.addEventListener("click", (e) => {
      const row = e.target.dataset.row;
      const col = e.target.dataset.col;
      if (this.state.seat[row][col] === 1) return;

      if (this.state.seat[row][col] === 0) {
        this.state.seat[row][col] = 2;
      } else if (this.state.seat[row][col] === 2) {
        this.state.seat[row][col] = 0;
      }
      this.setState({ seat: this.state.seat });
    });
  }
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }
  getState() {
    return this.state;
  }
  didMounted() {
    const { seat } = this.state;
    seat.map((row, rowIdx) => {
      const div = document.createElement("div");
      div.className = "hall__row";
      this.box.querySelector(".hall").append(div);
      row.map((status, colIdx) => {
        new Seat({ parent: div, status, rowIdx, colIdx });
      });
    });
  }

  render() {
    // const { seat } = this.state;
    // this.box.innerHTML = `
    // <div class="hall">
    //   ${seat
    //     .map((row, rowIdx) => {
    //       return `
    //     <div class="hall__row">
    //     ${row
    //       .map((status, colIdx) => {
    //         if (status === 0) {
    //           return `<div class="empty" data-row="${rowIdx}" data-col="${colIdx}"></div>`;
    //         } else if (status === 1) {
    //           return `<div class="impossible" data-row="${rowIdx}" data-col="${colIdx}"></div>`;
    //         } else if (status === 2) {
    //           return `<div class="selected" data-row="${rowIdx}" data-col="${colIdx}"></div>`;
    //         }
    //       })
    //       .join("")}
    //     </div>
    //     `;
    //     })
    //     .join("")}
    // </div>
    // `;

    this.box.innerHTML = `
    <div class="hall">
    </div>
    `;
    this.didMounted();
  }
}
