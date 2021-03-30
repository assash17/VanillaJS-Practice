import Correct from "./Correct.js";
import Score from "./Score.js";
import Wrong from "./Wrong.js";
import { LIMIT, WORDS, ALPHABET } from "../utils/const.js";

export default class App {
  target;
  state;
  scoreBox;
  wrongBox;
  correctBox;
  constructor(target) {
    this.target = target;
    this.state = {
      nowStage: Math.floor(Math.random() * WORDS.length),
      tryCount: 0,
      wrongAlphabet: [],
      correctAlphabet: [],
    };
    this.scoreBox = new Score({ parent: target });
    this.wrongBox = new Wrong({ parent: target });
    this.correctBox = new Correct({ parent: target });

    this.render();
    this.addEvent();
  }
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }
  render() {
    const { nowStage, tryCount, wrongAlphabet, correctAlphabet } = this.state;
    this.scoreBox.render(tryCount);
    this.wrongBox.render(wrongAlphabet);
    this.correctBox.render(correctAlphabet, WORDS[nowStage]);
  }
  addEvent() {
    window.addEventListener("keydown", (e) => {
      const input = e.key.toLowerCase();
      if (!ALPHABET.split("").includes(input)) return;

      console.log("input", input);

      const { nowStage, tryCount, wrongAlphabet, correctAlphabet } = this.state;

      if ([...wrongAlphabet, ...correctAlphabet].includes(input)) {
        alert("이미 시도한 알파벳입니다.");
        return;
      }

      if (WORDS[nowStage].split("").includes(input)) {
        console.log("correct!", WORDS[nowStage].split(""), input);
        this.setState({
          correctAlphabet: [...correctAlphabet, input],
        });
      } else {
        console.log("wrong!", WORDS[nowStage].split(""), input);
        this.setState({
          wrongAlphabet: [...wrongAlphabet, input],
        });
        const nextTryCount = tryCount + 1;
        this.setState({
          tryCount: nextTryCount,
        });

        if (nextTryCount === LIMIT) {
          setTimeout(() => {
            alert("시도횟수를 모두 사용하셨습니다.");
          }, 0);
        }
      }

      const removeDuplicationOfWord = new Set(WORDS[nowStage]);
      if (this.state.correctAlphabet.length === removeDuplicationOfWord.size) {
        setTimeout(() => {
          alert("정답");
        }, 0);
      }
    });
  }
}
