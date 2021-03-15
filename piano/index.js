const piano = {
  a: "도",
  s: "레",
  d: "미",
  f: "파",
  g: "솔",
  h: "라",
  j: "시",
  k: "도",
};
window.addEventListener("keydown", (e) => {
  if (!piano[e.key]) return;
  const keySpan = document.querySelector(`span[data-key=${e.key}]`);
  const soundAudio = document.querySelector(`audio[data-key=${e.key}]`);
  soundAudio.playbackRate = 10;
  soundAudio.currentTime = 0;
  soundAudio.play();
  keySpan.classList.add("press");
});

document.querySelectorAll(".key[data-key]").forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    // if (e.propertyName !== "font-size") return;
    e.target.classList.remove("press");
  });
});

document.getElementById("school").addEventListener("click", () => {
  const song = "gghhggdggddsgghhggdgdsda";
  play(song);
});
document.getElementById("same").addEventListener("click", () => {
  const song = "adgadghhhgfffdddsssa";
  play(song);
});

function play(song) {
  for (let i = 0; i < song.length; i += 1) {
    setTimeout(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: song[i] }));
    }, i * 500);
  }
}
