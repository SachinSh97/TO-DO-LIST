import React, { Component } from "react";
import { List, Icon, Empty } from "antd";

export default class TaskList extends Component {
  render() {
    const { items } = this.props;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <div>
        <List
          itemLayout="vertical"
          header={<h2>Due TaskList</h2>}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  type="delete"
                  text="Remove"
                  key="list-vertical-star-o"
                />,
                <IconText
                  type="edit"
                  text="Update"
                  key="list-vertical-like-o"
                />,
              ]}
            >
              <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
              {item.description}
            </List.Item>
          )}
        />
        <div style={{ marginTop: "7%" }} />
        <List
          itemLayout="vertical"
          header={<h2>Complete TaskList</h2>}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  type="star-o"
                  text="Remove"
                  key="list-vertical-star-o"
                />,
                <IconText
                  type="like-o"
                  text="Update"
                  key="list-vertical-like-o"
                />,
              ]}
            >
              <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
              {item.description}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
