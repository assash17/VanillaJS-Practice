export default class Wrong {
  parent;
  constructor({ parent }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.box.classList.add("wrong-box");

    parent.append(this.box);
  }
  render(wrongAlphabet) {
    this.box.innerHTML = `
      <h3>wrong alphabet</h3>
      ${wrongAlphabet.map((char) => {
        return `<span>${char}</span>`;
      })}
    `;
  }
}
