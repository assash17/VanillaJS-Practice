import Controller from "./Controller.js";
import UserList from "./UserList.js";

export default class App {
  target = null;
  constructor(target) {
    this.target = target;
    this.state = [
      { id: 1, money: 100 },
      { id: 2, money: 100 },
      { id: 3, money: 100 },
    ];
    this.nextId = 4;
    this.userList = new UserList({ parent: target, state: this.state });
    this.controller = new Controller({
      parent: target,
      onAdd: () => {
        this.onAdd();
      },
      onDouble: () => {
        this.onDouble();
      },
    });
  }
  onAdd() {
    this.setState([
      ...this.state,
      {
        id: this.nextId,
        money: 100,
      },
    ]);
    this.nextId += 1;
  }
  onDouble() {
    this.setState(
      this.state.map((s) => {
        s.money *= 2;
        return s;
      })
    );
  }
  setState(newState) {
    this.state = newState;
    this.userList.setState(this.state);
  }
}
