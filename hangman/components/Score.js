import { LIMIT } from "../utils/const.js";

export default class Score {
  parent;
  constructor({ parent }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.box.classList.add("score-box");

    parent.append(this.box);
  }
  render(tryCount) {
    this.box.innerHTML = `
      <h3>count</h3>
      <span>${tryCount}/${LIMIT}</span>
    `;
  }
}
