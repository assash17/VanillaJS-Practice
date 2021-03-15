class ScoreViewer {
  _target;
  constructor(target) {
    this._target = target;

    this._scoreSpan = document.createElement("span");
    this._scoreSpan.textContent = 0;

    this.render();
  }

  get target() {
    return this._target;
  }
  set target(value) {
    this._target = value;
  }
  get scoreSpan() {
    return this._scoreSpan;
  }
  set scoreSpan(value) {
    this._scoreSpan = value;
  }

  render() {
    this.target.append(this.scoreSpan);
  }
}
export default ScoreViewer;
