import * as React from "react";
import ListItem from "./ListItem";
import List from "./List";

interface IState {
  value: string;
}

interface IProp {
  submitted: Function;
}

export default class NewItem extends React.Component<IProp, IState> {
  state = { value: "" };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputString = event.currentTarget.value;
    this.setState(() => ({ value: inputString }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.submitted(this.state.value);
  };

  render() {
    return (
      <div>
        <div className="newItem">
          <h3>Add new item</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                value={this.state.value}
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}
