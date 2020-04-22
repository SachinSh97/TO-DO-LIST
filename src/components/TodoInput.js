import React, { Component } from "react";
import { Button, Input, Icon, Tooltip, Form, DatePicker } from "antd";

const { TextArea } = Input;
class TodoInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values);
        this.handleReset();
      }
    });
  };
  handleReset = () => {
    this.utilFormReset();
  };
  utilFormReset = () => {
    this.props.form.resetFields();
  };
  componentDidMount = () => {};
  render() {
    const { item, handleChange, editItem } = this.props;
    const { getFieldDecorator } = this.props.form;
    debugger;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("Task_Heading", {
            initialValue: item ? item : "",
            rules: [
              {
                required: true,
                message: "Please enter task heading!",
                whitespace: true,
              },
            ],
          })(
            <Input
              placeholder="Add todo Task heading"
              prefix={
                <Icon
                  type="book"
                  theme="filled"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              suffix={
                <Tooltip title="insert task you want to add in list">
                  <Icon
                    type="info-circle"
                    style={{ color: "rgba(0,0,0,.45)" }}
                  />
                </Tooltip>
              }
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("Task_Description", {
            rules: [
              {
                required: true,
                message: "Please enter task description!",
                whitespace: true,
              },
            ],
          })(
            <TextArea
              placeholder="Add todo Task Description"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("Date_Of_Completion", {
            rules: [
              {
                required: true,
                message: "Please select date of completion",
              },
            ],
          })(<DatePicker onChange={this.onDateChange} />)}
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type={editItem ? "default" : "primary"}
            style={{
              background: editItem ? "#32CD32" : "",
              color: editItem ? "#fff" : "",
            }}
            block
          >
            {editItem ? "edit item" : "add item"}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
TodoInput = Form.create({ name: "horizontal_form" })(TodoInput);
export default TodoInput;
