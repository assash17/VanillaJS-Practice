export const countryCodes = ["USD", "KRW", "JPY", "CNY"];

export default class RateTemplate {
  constructor({ target, type, onChangeCode, onChangeValue }) {
    this.target = target;
    this.box = document.createElement("div");
    this.type = type;
    this.onChangeCode = onChangeCode;
    this.onChangeValue = onChangeValue;
    this.state = {};
    this.initState();

    this.target.append(this.box);
    this.addEvent();
    this.render();
  }
  initState() {
    if (this.type === "from") {
      this.state.code = "USD";
      this.state.value = 1;
    } else if (this.type === "to") {
      this.state.code = "KRW";
      this.state.value = 0;
    }
  }
  addEvent() {
    this.box.addEventListener("change", (e) => {
      if (e.target.nodeName === "SELECT") {
        this.setState({
          code: e.target.value,
        });
        this.onChangeCode();
      } else if (e.target.nodeName === "INPUT") {
        this.setState({
          value: e.target.value,
        });
        this.onChangeValue();
      }
    });
  }
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }
  getState() {
    return this.state;
  }
  render() {
    const { code, value } = this.state;
    this.box.innerHTML = `
    <select class="select-code">
      ${countryCodes
        .map((countryCode) => {
          if (countryCode === code) {
            return `<option value="${countryCode}" selected>${countryCode}</option>`;
          } else {
            return `<option value="${countryCode}">${countryCode}</option>`;
          }
        })
        .join("")}
    </select>
    ${
      this.type === "from"
        ? `<input class="input-value" type="number" value="${value}"></input>`
        : `<input class="input-value" type="text" value="${value}" disabled></input>`
    }
    `;
  }
}
