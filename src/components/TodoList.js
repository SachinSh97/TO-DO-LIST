import React, { Component } from "react";
import { Button } from "antd";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul>
        <h1 style={{ textAlign: "center", fontWeight: "600" }}>To Do List</h1>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <Button
          type="danger"
          block
          onClick={clearList}
          style={{ marginLeft: "-2.5%", marginTop: "5%" }}
        >
          Clear List
        </Button>
      </ul>
    );
  }
}
