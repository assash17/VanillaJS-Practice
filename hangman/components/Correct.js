export default class Correct {
  parent;
  constructor({ parent }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.box.classList.add("correct-box");

    parent.append(this.box);
  }
  render(correctAlphabet, word) {
    this.box.innerHTML = `
      <h3>correct alphabet</h3>
      ${word
        .split("")
        .map((char) => {
          if (correctAlphabet.includes(char)) {
            return `<span>${char}</span>`;
          } else {
            return `<span>_</span>`;
          }
        })
        .join("")}
    `;
  }
}
