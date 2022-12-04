import React from 'react';

function App(props) {
  return (
    <div>
      <h1>Hello,{props.componentCallNo} {props.name}.</h1>
    </div>
  );
}

export default App;
