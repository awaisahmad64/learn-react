import React from 'react';
import { data } from './App';

function ChildC() {
  return <>
  <data.Consumer>
  {
  (name)=>{
return (
  <h1>Welocme to {name}</h1>
)
  }
  }
  </data.Consumer>
  </>
}

export default ChildC;
