const color = ["red", "green", "black"];
const target = document.getElementById("target");
const temp = new DocumentFragment();

let cnt = 0;
const timerID = setInterval(() => {
  const div = document.createElement("div");
  const randomIdx = Math.floor(Math.random() * 3);
  div.style.backgroundColor = color[randomIdx];
  div.textContent = cnt;
  div.style.color = "white";
  temp.append(div);
  cnt += 1;
  if (cnt >= 30) {
    target.append(temp);
    clearInterval(timerID);
  }
}, 0);

document.getElementById("btnBox").addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    if (e.target.nodeName === "A") {
      e.preventDefault();
      for (const div of target.children) {
        div.hidden = false;
      }
    }
    return;
  }
  const color = e.target.dataset.color;
  console.log(color);
  for (const div of target.children) {
    if (div.style.backgroundColor !== color) {
      div.hidden = true;
    } else {
      div.hidden = false;
    }
  }
});
