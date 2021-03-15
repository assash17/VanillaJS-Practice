import Controller from "./Controller.js";
import Header from "./Header.js";
import Video from "./Video.js";

export default class App {
  target = null;
  constructor(target) {
    this.target = target;

    this.header = new Header({ target });
    this.video = new Video({ target });
    this.controller = new Controller({
      target,
      onClick: (e) => {
        const action = e.target.dataset.action;
        if (!action) return;
        this[action](e);
      },
    });
  }
  play(e) {
    this.video.play();
  }
  stop(e) {
    this.video.stop();
  }
  volume(e) {
    this.video.setVolume(e.target.value / 100);
  }
}
