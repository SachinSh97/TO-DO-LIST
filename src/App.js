import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { Row, Col, Card, Divider } from "antd";
import "./App.css";
import TaskTable from "./components/calender";
import TaskList from "./components/taskList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: this.state.id + 1,
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <Row>
        <Col span={6} style={{ margin: "1%" }}>
          <div style={{ marginTop: "10%" }} />
          <TaskTable />
        </Col>
        <Divider type="vertical" />
        <Col span={10}>
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>TodoInput</h1>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </Col>
        <Col span={6} style={{ margin: "1%" }}>
          <TaskList />
        </Col>
      </Row>
    );
  }
}
export default App;
