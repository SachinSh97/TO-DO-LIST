import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { Row, Col, Card, Divider } from "antd";
import "./App.css";
import TaskTable from "./components/calender";
import TaskList from "./components/taskList";
import TodoInput from "./components/TodoInput";
import moment from "moment";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    description: "",
    date: "",
    editItem: false,
    audioUrl: "",
  };
  // handleChange = (e) => {
  //   debugger;
  //   this.setState({
  //     item: e.target.value,
  //   });
  // };
  handleSubmit = (e) => {
    debugger;
    const newItem = {
      id: this.state.id,
      title: e.Task_Heading,
      description: e.Task_Description,
      date: e.Date_Of_Completion.format("YYYY-MM-DD"),
      audio: this.state.audioUrl,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: this.state.id + 1,
      editItem: false,
    });
  };
  handleAudio = (e) => {
    debugger;
    this.setState({ audioUrl: e });
  };
  clearList = () => {
    alert("Do You want to continue??");
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
    debugger;
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
        <Col span={6} style={{ marginLeft: "1%", marginRight: "1%" }}>
          <div style={{ marginTop: "10%" }} />
          <Card>
            <TaskTable />
          </Card>
        </Col>

        <Col span={10}>
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>TodoInput</h1>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleAudio={this.handleAudio}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </Col>
        <Col span={6} style={{ marginLeft: "1%" }}>
          <Card style={{ marginTop: "10%", width: "450px" }}>
            <TaskList items={this.state.items} />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default App;
