import React, { Component } from 'react';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  componentDidMount() {
    // Lifecycle func - when component will mounts / loads
    console.log('The app component loaded.');
  }
  componentDidUpdate(prevProps) {
    // Lifecycle func - when component props change
  }
  componentWillUnmount() {
    //Lifecycle func - when component unmount / clean up funcitons
  }
  render() {
    return (
      <div>
        <center>
          <h1>useEffect using class component</h1>
          <p>{windowWidth}</p>
        </center>
      </div>
    );
  }
}
