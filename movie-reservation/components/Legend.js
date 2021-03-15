export default class Legend {
  parent = null;
  box = null;
  constructor({ parent }) {
    this.parent = parent;
    this.box = document.createElement("div");
    this.parent.append(this.box);

    this.render();
  }
  render() {
    this.box.innerHTML = `
    <div class="legend">
      <div class="legend__row">
        <div class="impossible"></div>
        <span>선택불가</span>
      </div>
      <div class="legend__row">
        <div class="selected"></div>
        <span>선택</span>
      </div>
      <div class="legend__row">
        <div class="empty"></div>
        <span>빈 자리</span>
      </div>
    </div>
    `;
  }
}
