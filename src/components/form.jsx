import React from "react";
import { Header, Container, Grid, Button } from "semantic-ui-react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <Grid style={{ height: "80vh" }}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column mobile={16} computer={16} tablet={16}>
              <Header style={{ marginBottom: "2em" }} as="h2">
                Second Header
              </Header>
              <Option q={this.props.question} />
              <Option q={this.props.question} />
              <Option q={this.props.question} />
              <Option q={this.props.question} />
              <FormNav />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

class FormNav extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "3em" }}>
        <Button.Group floated="left">
          <Button>Precedente</Button>
        </Button.Group>
        <Button.Group floated="left">
          <Button>Successivo</Button>
        </Button.Group>
      </div>
    );
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formArray: [],
      question: 0
    };
  }

  //if selected animate border

  render() {
    return (
      <div className="content-form">
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Button
                basic
                color={"green"}
                circular={true}
                content="Click Here fsdjkfjlsdflksd fdskjfsdkljfsl fsdlkjfsdklfjsdkl flsdjdfklsjflsf dsfsdf fsdfsdfsdfsdfsdsdfsdfsdfsdfsdfsdfs"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
