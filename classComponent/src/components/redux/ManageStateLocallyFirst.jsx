class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  // Add handleChange() and submitMessage() methods here
  submitMessage = () => {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    });
  };
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
