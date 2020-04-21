import React, { Component } from "react";
import { List, Icon } from "antd";

export default class TaskList extends Component {
  render() {
    const listData = [];
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "http://ant.design",
        title: `ant design part ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      });
    }
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
          dataSource={listData}
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
              {item.content}
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
          dataSource={listData}
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
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
