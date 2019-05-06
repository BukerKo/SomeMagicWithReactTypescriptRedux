import React, { Component, Dispatch } from "react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import { AppState } from "./store/store";
import { addItem, deleteItem } from "./store/actions";
import { ListState } from "./store/types";
import { connect } from "react-redux";

interface IState {
  list: Array<ListItem>;
}

interface IProp {
  addItem: typeof addItem;
  deleteItem: typeof deleteItem;
  list: ListState;
}

class List extends Component<IProp, IState> {
  componentWillMount() {
    this.setState({ list: new Array<ListItem>() });
  }

  handleSubmit = (value: string) => {
    this.props.addItem(new ListItem(value));
    this.setState({});
  };

  handleDelete = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    this.props.deleteItem(event.currentTarget.name);
    this.setState({});
  };

  render() {
    let items;
    if (this.props.list.list != null) {
      items = this.props.list.list.map(listItem => (
        <div className="item">
          {listItem.content}
          <br />
          <input
            type="button"
            name={listItem.id}
            value="Delete"
            onClick={this.handleDelete}
          />
        </div>
      ));
    }

    return (
      <div>
        <NewItem submitted={this.handleSubmit} />
        {items}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { addItem, deleteItem }
)(List);
