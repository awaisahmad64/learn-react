import React from 'react';
import ReactDOM from 'react-dom/client';
class BindThis extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      text: '',
    };
  }
  clickHandler() {
    this.setState({text:"Awais Ahmad"});
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<BindThis />);
