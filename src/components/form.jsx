import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [],
      output: [],
      progress: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <div>ciao</div>;
  }
}
