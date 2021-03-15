class Controller {
  _target;

  constructor(target) {
    this._target = target;

    this._startBtn = document.createElement("button");
    this._startBtn.textContent = "Start";

    this._finishBtn = document.createElement("button");
    this._finishBtn.textContent = "Finish";
    this._finishBtn.disabled = true;

    this.render();
  }

  get target() {
    return this._target;
  }
  set target(value) {
    this._target = value;
  }

  get startBtn() {
    return this._startBtn;
  }
  set startBtn(value) {
    this._startBtn = value;
  }

  get finishBtn() {
    return this._finishBtn;
  }
  set finishBtn(value) {
    this._finishBtn = value;
  }

  render() {
    this.target.append(this.startBtn);
    this.target.append(this.finishBtn);
  }
}
export default Controller;
