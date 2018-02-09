import React from "react";
import { Progress, Container, Menu, Input, Image } from "semantic-ui-react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  render() {
    return (
      <div className="header-menu">
        <Menu borderless color="green">
          <Menu.Item onClick={this.handleItemClick}>
            <Image
              src="https://react.semantic-ui.com/logo.png"
              size="mini"
              circular
            />
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item name="Help" onClick={this.handleItemClick} />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
