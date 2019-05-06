import * as React from "react";
const uuidv4 = require("uuid/v4");

export default class ListItem {
  content: string;
  id: string;

  constructor(content: string) {
    this.content = content;
    this.id = uuidv4();
  }
}
