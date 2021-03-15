import { api } from "../utils/api.js";
import Header from "./Header.js";
import RateTemplate from "./RateTemplate.js";

export default class App {
  constructor({ target }) {
    this.header = new Header({ target });
    this.rate = null;
    this.fromTemplate = new RateTemplate({
      target,
      type: "from",
      onChangeCode: () => {
        this.onChangeCode();
      },
      onChangeValue: () => {
        this.onChangeValue();
      },
    });
    this.toTemplate = new RateTemplate({
      target,
      type: "to",
      onChangeCode: () => {
        this.onChangeCode();
      },
    });
    this.onChangeCode();
  }
  onChangeValue() {
    const { code: fromCode, value: fromValue } = this.fromTemplate.getState();
    const { code: toCode, value: toValue } = this.toTemplate.getState();
    this.toTemplate.setState({
      value: (this.rate * fromValue).toFixed(2),
    });
  }
  onChangeCode() {
    const { code: fromCode, value: fromValue } = this.fromTemplate.getState();
    const { code: toCode, value: toValue } = this.toTemplate.getState();
    this.getData(fromCode, fromValue, toCode);
  }
  getData(fromCode, fromValue, toCode) {
    this.toTemplate.setState({ value: "로딩 중..." });
    api.getRate(fromCode).then((data) => {
      this.rate = data.conversion_rates[toCode];
      this.toTemplate.setState({
        value: (data.conversion_rates[toCode] * fromValue).toFixed(2),
      });
    });
  }
}
