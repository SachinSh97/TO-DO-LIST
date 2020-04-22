import React, { Component } from "react";
import { Button, List, Skeleton, Icon } from "antd";
// import TodoItem from "./TodoItem(no)";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    debugger;
    return (
      <ul>
        <h1 style={{ textAlign: "center", fontWeight: "600" }}>To Do List</h1>
        {items[0] ? (
          <List
            style={{ marginRight: "5%" }}
            itemLayout="horizontal"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={items}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <span onClick={() => handleEdit(item.id)}>
                    <Icon
                      type="edit"
                      theme="filled"
                      style={{ color: "#32CD32" }}
                    />
                  </span>,
                  <span onClick={() => handleDelete(item.id)}>
                    <Icon
                      type="delete"
                      theme="filled"
                      style={{ color: "#FF4D4F" }}
                    />
                  </span>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        ) : null}

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
