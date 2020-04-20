import React, { Component } from "react";
import { Button, Input, Icon, Tooltip, Form } from "antd";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            placeholder="Add todo Task"
            value={item}
            onChange={handleChange}
            prefix={
              <Icon
                type="book"
                theme="filled"
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            suffix={
              <Tooltip title="insert task you want to add in list">
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type={editItem ? "danger" : "primary"}
            block
          >
            {editItem ? "edit item" : "add item"}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
