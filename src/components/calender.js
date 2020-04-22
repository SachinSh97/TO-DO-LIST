import React, { Component } from "react";
import { Calendar, Alert } from "antd";
import moment from "moment";

export default class TaskTable extends Component {
  state = {
    value: moment(""),
    selectedValue: moment(""),
  };

  onSelect = (value) => {
    debugger;
    this.setState({
      value,
      selectedValue: value,
    });
  };
  componentDidMount = () => {
    debugger;
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.setState({ value: moment(date), selectedValue: moment(date) });
  };
  onPanelChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue &&
            selectedValue.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </div>
    );
  }
}
