export default class Controller {
  parent = null;
  constructor({ parent, onAdd, onDouble }) {
    this.parent = parent;
    this.onAdd = onAdd;
    this.onDouble = onDouble;
    this.box = document.createElement("div");
    this.parent.append(this.box);
    this.render();
    this.addEvent();
  }
  addEvent() {
    this.box.addEventListener("click", (e) => {
      const type = e.target.dataset.type;
      switch (type) {
        case "add":
          this.onAdd();
          break;
        case "double":
          this.onDouble();
          break;
      }
    });
  }
  render() {
    this.box.innerHTML = `
      <button data-type="add">사용자 추가</button>
      <button data-type="double">money x 2</button>
    `;
  }
}
