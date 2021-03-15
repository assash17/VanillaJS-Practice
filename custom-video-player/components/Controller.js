export default class Controller {
  target = null;
  constructor({ target, onClick }) {
    this.target = target;
    this.box = document.createElement("div");
    this.target.append(this.box);
    this.onClick = onClick;

    this.render();
    this.addEvent();
  }
  addEvent() {
    this.box.addEventListener("click", (e) => {
      this.onClick(e);
    });
    this.box.addEventListener("input", (e) => {
      this.onClick(e);
    });
  }
  render() {
    this.box.innerHTML = `
      <button data-action="play">play</button>
      <button data-action="stop">stop</button>
      <label>볼륨<input type="range" min="0" max="100" data-action="volume"></input></label>
    `;
  }
}
