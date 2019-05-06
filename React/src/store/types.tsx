import ListItem from "../ListItem";

export interface ListState {
  list: Array<ListItem>;
}

// Describing the different ACTION NAMES available
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: ListItem;
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  meta: {
    id: string;
  };
}

export type ItemActionTypes = AddItemAction | DeleteItemAction;
