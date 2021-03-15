let cnt = 1;
const timerID = setInterval(() => {
  const div = document.createElement("div");
  div.textContent = cnt;
  cnt += 1;
  document.body.append(div);
  if (document.body.offsetHeight > window.innerHeight) {
    clearInterval(timerID);
  }
}, 0);

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    const div = document.createElement("div");
    div.textContent = cnt;
    cnt += 1;
    document.body.append(div);
  }
});
