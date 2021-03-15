const inputEl = document.querySelector(".dropdownBox--input");
const listEl = document.querySelector(".dropdownBox--list");

listEl.addEventListener("mousedown", (e) => {
  if (e.target.nodeName !== "LI") return;
  inputEl.value = e.target.textContent;
});

inputEl.addEventListener("focus", () => {
  listEl.classList.toggle("show");
});
inputEl.addEventListener("blur", () => {
  listEl.classList.toggle("show");
});
