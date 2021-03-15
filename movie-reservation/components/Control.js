export default class Control {
  parent = null;
  box = null;
  constructor({ parent, onReserve }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.parent.append(this.box);
    this.onReserve = onReserve;

    this.addEvent();
    this.render();
  }
  addEvent() {
    this.box.addEventListener("click", (e) => {
      if (e.target.nodeName !== "BUTTON") return;
      this.onReserve();
    });
  }
  render() {
    this.box.innerHTML = `
      <div>
        <button data-type="reserve">예매하기</button>
      </div>
    `;
  }
}
