export default class UserList {
  parent = null;
  constructor({ parent, state }) {
    this.parent = parent;
    this.state = state;
    this.box = document.createElement("div");
    this.parent.append(this.box);
    this.render();
  }
  setState(newState) {
    this.state = newState;
    this.render();
  }
  render() {
    this.box.innerHTML = `
      ${this.state
        .map((s) => {
          return `
          <div>
            <span>ID: ${s.id}</span>
            <span>MONEY: ${s.money}</span>
          </div>
        `;
        })
        .join("")}
    `;
  }
}
