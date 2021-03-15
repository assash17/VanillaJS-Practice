class TodoList2 {
  $target;
  constructor(target) {
    this.$target = target;
    this.render();
    this.addEvent();
  }
  addEvent() {
    const input = this.$target.querySelector(".inputBox--input");
    const button = this.$target.querySelector(".inputBox--add");
    const ul = this.$target.querySelector(".resultBox-ul");
    // enter key
    input.addEventListener("keyup", (e) => {
      console.log("input");
      if (e.code !== "Enter") return;
      if (!e.target.value) return;
      console.log("input");
      this.addTodo(ul, e.target.value);
      e.target.value = "";
    });

    button.addEventListener("click", (e) => {
      console.log("button");
      if (!input.value) return;
      this.addTodo(ul, input.value);
      input.value = "";
    });
  }
  addTodo(target, value) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = value;
    const button = document.createElement("button");
    button.textContent = "삭제";
    button.addEventListener("click", () => {
      button.closest("li").remove();
    });
    div.append(span);
    div.append(button);
    li.append(div);
    target.append(li);
  }
  render() {
    const inputBox = document.createElement("div");
    inputBox.className = "inputBox";
    const input = document.createElement("input");
    input.className = "inputBox--input";
    const button = document.createElement("button");
    button.className = "inputBox--add";
    button.textContent = "Add";
    inputBox.append(input);
    inputBox.append(button);

    const resultBox = document.createElement("div");
    resultBox.className = "resultBox";
    const resultUl = document.createElement("ul");
    resultUl.className = "resultBox-ul";
    resultBox.append(resultUl);

    const df = new DocumentFragment();
    df.append(inputBox);
    df.append(resultBox);

    this.$target.append(df);
  }
}

export default TodoList2;
