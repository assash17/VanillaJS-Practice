const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  console.log("click");
  document.getElementById("modalWrap").style.visibility = "visible";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modalWrap").style.visibility = "hidden";
});
