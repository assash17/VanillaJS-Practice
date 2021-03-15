export default class Header {
  target = null;
  constructor({ target }) {
    this.target = target;
    this.box = document.createElement("div");
    this.target.append(this.box);

    this.render();
  }
  render() {
    this.box.innerHTML = `
      <h1>custom video player</h1>
    `;
  }
}
