import { ListState, ItemActionTypes, ADD_ITEM, DELETE_ITEM } from "./types";
import ListItem from "../ListItem";

const initialState: ListState = {
  list: new Array<ListItem>()
};

export function listReducer(
  state = initialState,
  action: ItemActionTypes
): ListState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        list: [...state.list, action.payload]
      };
    case DELETE_ITEM:
      return {
        list: state.list.filter(item => item.id !== action.meta.id)
      };
    default:
      return state;
  }
}
