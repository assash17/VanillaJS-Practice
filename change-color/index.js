// class RandomColorDiv {
//   $target;
//   constructor(target, width, height) {
//     this.$target = target;
//     this.backDivDom = document.createElement("div");
//     this.innerBtnDom = document.createElement("button");
//     this.backDivDom.className = "backDiv";
//     this.backDivDom.style.width = `${width}px`;
//     this.backDivDom.style.height = `${height}px`;
//     this.innerBtnDom.textContent = "click me";
//     this.innerBtnDom.addEventListener("click", () => {
//       const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//       this.backDivDom.style.backgroundColor = `#${randomColor}`;
//     });
//     this.backDivDom.append(this.innerBtnDom);
//     this.$target.append(this.backDivDom);
//   }
// }

function RandomColorDiv(target, width, height) {
  this.$target = target;
  this.backDivDom = document.createElement("div");
  this.innerBtnDom = document.createElement("button");
  this.backDivDom.className = "backDiv";
  this.backDivDom.style.width = `${width}px`;
  this.backDivDom.style.height = `${height}px`;
  this.innerBtnDom.textContent = "click me";
  this.innerBtnDom.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.backDivDom.style.backgroundColor = `#${randomColor}`;
  });
  this.backDivDom.append(this.innerBtnDom);
  this.$target.append(this.backDivDom);
}
document.querySelector("#submit").addEventListener("click", (e) => {
  console.log("click");
  make();
});

function make() {
  const width = Number(document.querySelector("input[name=width]").value);
  const height = Number(document.querySelector("input[name=height]").value);
  if (width < 100 || width > 500 || height < 100 || height > 500) {
    alert("너비와 높이는 100~500 사이의 값이어야 합니다.");
    return;
  }
  const result = document.getElementById("result");
  new RandomColorDiv(result, width, height);
}
