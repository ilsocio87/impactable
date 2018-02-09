import React from "react";
import { render } from "react-dom";
import Form from "./components/form";
import Menu from "./components/header";
import model from "./model.js";
import "semantic-ui-css/semantic.min.css";
import { Progress, Container } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 0
    };
  }

  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Form />
        </Container>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: "1em"
          }}
        >
          <Container>
            <Progress
              className="center"
              label="circa 2 minuti rimanenti"
              percent={50}
            />
          </Container>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
