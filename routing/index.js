const menu = document.getElementById("menu");
const app = document.getElementById("app");

const route = {
  home: "home",
  menu1: "menu1",
  menu2: "menu2",
};

menu.addEventListener("click", (e) => {
  if (e.target.nodeName !== "A") return false;

  e.preventDefault();
  const path = e.target.getAttribute("href").replace("/", "");

  history.pushState(path, path, path);
  render(path);
});

window.onpopstate = function (e) {
  render(e.state);
};

const render = (path) => {
  app.innerHTML = route[path];
};
