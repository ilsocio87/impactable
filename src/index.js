import React from "react";
import { render } from "react-dom";
import Form from "./components/form";
import "semantic-ui-css/semantic.min.css";
import { Container, Menu, Input, Image } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Menu secondary>
            <Menu.Item onClick={this.handleItemClick}>
              <Image
                src="https://react.semantic-ui.com/logo.png"
                size="mini"
                circular
              />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item name="Help" onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
