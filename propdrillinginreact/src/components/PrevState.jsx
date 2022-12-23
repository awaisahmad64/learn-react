import React, { useState } from 'react';

function PrevState() {
  const [state, setState] = useState({ count: 1, theme: 'blue' });
  const count= state.count;
  const theme= state.theme;
  const increment = ()=>{
   setState((prev)=>{
    return {...prev,count: prev.count +1}; 
   });
  }
  const decrement =()=>{
   setState((prev)=>{
    return {...prev, count: prev.count - 1}; 
   });
  }
  return (
    <div>
      <button onClick={()=> decrement()}> - </button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={()=> increment()}>+</button>
    </div>
  );
}

export default PrevState;
