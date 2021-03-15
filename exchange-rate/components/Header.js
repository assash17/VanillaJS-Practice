export default class Header {
  constructor({ target }) {
    this.target = target;
    this.box = document.createElement("div");

    this.target.append(this.box);
    this.render();
  }
  render() {
    this.box.innerHTML = `
    <h1>Exchange Rate</h1>
    `;
  }
}
