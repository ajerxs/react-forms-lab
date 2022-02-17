import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  saveMessage = (event) => {
    this.setState({
      message: event.target.value,
    })
  }
  
  charsRemaining = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event) => this.saveMessage(event)} />
        <div>{this.charsRemaining()}</div>
      </div>
    );
  }
}

export default TwitterMessage;
