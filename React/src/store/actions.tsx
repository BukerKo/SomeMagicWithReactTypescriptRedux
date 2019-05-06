import ListItem from "../ListItem";
import { ADD_ITEM, DELETE_ITEM } from "./types";

export function addItem(newItem: ListItem) {
  return {
    type: ADD_ITEM,
    payload: newItem
  };
}

export function deleteItem(id: string) {
  return {
    type: DELETE_ITEM,
    meta: {
      id
    }
  };
}
