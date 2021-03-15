function getData(url) {
  return fetch(url).then((res) => res.json());
}

const target = document.getElementById("app");
let id = 1;
const timerID = setInterval(() => {
  if (window.innerHeight < document.body.offsetHeight) {
    console.log("clear");
    clearInterval(timerID);
  } else {
    getData(`https://jsonplaceholder.typicode.com/todos/${id}`).then((data) => {
      const div = document.createElement("div");
      const idDiv = document.createElement("div");
      const titleDiv = document.createElement("div");
      idDiv.textContent = data.id;
      titleDiv.textContent = data.title;
      div.append(idDiv);
      div.append(titleDiv);
      target.append(div);
      id += 1;
    });
  }
}, 1000);

window.addEventListener("scroll", (e) => {
  console.log(e);
});
