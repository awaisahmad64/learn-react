import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(pros) {
    super(props);
    this.state = { name: 'Awais' };
  }
  handler(value) {
    this.setState({ name: value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button
          onClick={(e) => {
            this.handler('env');
          }}
        >
          click
        </button>
      </div>
    );
  }
}
