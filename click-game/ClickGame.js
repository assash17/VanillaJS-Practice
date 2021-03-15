import Board from "./components/Board.js";
import Controller from "./components/Controller.js";
import ScoreViewer from "./components/ScoreViewer.js";

class ClickGame {
  target;
  constructor(target) {
    this.target = target;

    this.controllerDiv = document.createElement("div");
    this.scoreViewerDiv = document.createElement("div");
    this.boardDiv = document.createElement("div");

    this.controller = new Controller(this.controllerDiv);
    this.scoreViewer = new ScoreViewer(this.scoreViewerDiv);
    this.board = new Board(this.boardDiv);

    this.render();
    this.addEvent();
  }
  addEvent() {
    this.controller.startBtn.addEventListener("click", (e) => {
      e.target.disabled = true;
      this.controller.finishBtn.disabled = false;
      this.board.start();
    });
    this.controller.finishBtn.addEventListener("click", (e) => {
      e.target.disabled = true;
      this.controller.startBtn.disabled = false;
      this.board.finish();
    });
    this.board.target.addEventListener("click", (e) => {
      console.log(e.target.style.backgroundColor);
      if (e.target.style.backgroundColor === "red") {
        this.scoreViewer.scoreSpan.textContent =
          Number(this.scoreViewer.scoreSpan.textContent) + 1;
      }
    });
  }
  render() {
    this.target.append(this.controllerDiv);
    this.target.append(this.scoreViewerDiv);
    this.target.append(this.boardDiv);
  }
}

export default ClickGame;
