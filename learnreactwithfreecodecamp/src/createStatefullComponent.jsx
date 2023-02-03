import React from 'react';
import ReactDOM from 'react-dom/client';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        firstName:'Awais'
    }
  }
  render() {
    return <h1>Hello,{this.state.firstName}</h1>;
  }
}
// ReactDOM.render(<Test />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
  <Test />
)