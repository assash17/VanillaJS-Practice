class TodoList {
  $target;
  state;
  id;
  constructor(target) {
    this.$target = target;
    this.state = {
      todo: [],
    };
    this.id = 0;
    this.render();
  }
  addEventListener() {
    const input = document.querySelector(".inputBox input");
    const button = document.querySelector(".inputBox .inputBox--add");
    const ul = document.querySelector(".resultBox ul");

    // enter key
    input.addEventListener("keyup", (e) => {
      console.log("input");
      if (e.code !== "Enter") return;
      if (!e.target.value) return;
      this.setState({
        todo: [...this.state.todo, { id: this.id++, value: e.target.value }],
      });
    });

    // add button click
    button.addEventListener("click", (e) => {
      console.log("button");
      if (!input.value) return;
      this.setState({
        todo: [...this.state.todo, { id: this.id++, value: input.value }],
      });
    });

    // button click in list
    ul.addEventListener("click", (e) => {
      if (e.target.matches("[data-type=remove]")) {
        const id = Number(e.target.dataset.id);
        console.log(id);
        this.setState({
          todo: this.state.todo.filter((t) => {
            return t.id !== id;
          }),
        });
      }
    });
  }
  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }
  render() {
    this.$target.innerHTML = `
    <div class="inputBox">
      <input />
      <button class="inputBox--add">Add</button>
    </div>
    <div class="resultBox">
      <ul>
        ${this.state.todo
          .map((t) => {
            return `
          <li>
            <div>
              <span>${t.value}</span>
              <button data-type="remove" data-id=${t.id}>삭제</button>
            </div>
          </li>
        `;
          })
          .join("")}

      </ul>
    </div>
    `;
    this.addEventListener();
  }
}

export default TodoList;
