const pages = [
  "change-color",
  "modal",
  "infinity-scroll",
  "filtering",
  "routing",
  "click-game",
  "input-example",
  "ajax",
  "dropdown",
  "piano",
  "input-validation",
  "movie-reservation",
  "custom-video-player",
  "exchange-rate",
];
const menu = document.getElementById("menu");
const temp = new DocumentFragment();
pages.forEach((p) => {
  const a = document.createElement("a");
  a.href = p;
  a.textContent = p;
  const li = document.createElement("li");
  li.append(a);
  temp.append(li);
});
menu.append(temp);
