import React, { Component } from "react";
import { Icon, Row, Col, List } from "antd";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <Row>
        <Col span={20}>
          <h2>{title}</h2>
        </Col>
        <Col span={4}>
          <div>
            <span style={{ marginRight: "7%" }} onClick={handleEdit}>
              <Icon
                type="edit"
                theme="filled"
                style={{ color: "#32CD32", fontSize: "20px" }}
              />
            </span>
            <span onClick={handleDelete}>
              <Icon
                type="delete"
                theme="filled"
                style={{ color: "#FF4D4F", fontSize: "20px" }}
              />
            </span>
          </div>
        </Col>
      </Row>
    );
  }
}
