export default class Video {
  target = null;
  constructor({ target }) {
    this.target = target;
    this.box = document.createElement("div");
    this.target.append(this.box);

    this.render();
  }
  play() {
    this.box.querySelector("video").play();
  }
  stop() {
    this.box.querySelector("video").pause();
  }
  setVolume(value) {
    this.box.querySelector("video").volume = value;
  }
  render() {
    this.box.innerHTML = `
      <video src="./resource/video.mp4" width="600px"></video>
    `;
    this.box.querySelector("video").volume = 0.5;
  }
}
