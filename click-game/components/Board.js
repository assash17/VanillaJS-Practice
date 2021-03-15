class Board {
  _target;
  constructor(target) {
    this._target = target;
    this._timer = null;

    this.render();
  }

  get target() {
    return this._target;
  }
  set target(value) {
    this._target = value;
  }
  start() {
    let now = null;
    this._timer = setInterval(() => {
      while (true) {
        const random = Math.floor(Math.random() * 6);
        if (now !== random) {
          now = random;
          break;
        }
      }
      const children = this.target.children;
      for (let i = 0; i < children.length; i += 1) {
        const target = children[i];
        if (i === now) {
          target.style.backgroundColor = "red";
        } else {
          target.style.backgroundColor = "white";
        }
      }
    }, 600);
  }

  finish() {
    clearInterval(this._timer);
  }

  render() {
    this.target.className = "board";
    for (let i = 0; i < 6; i += 1) {
      const div = document.createElement("div");
      div.className = "board__box";
      this.target.append(div);
    }
  }
}
export default Board;
