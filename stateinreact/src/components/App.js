import React, { useState } from 'react';
import UseRef from './UseRef';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span style={{ padding: '0 .5rem' }}>
          {counter >= 0 ? counter : setCounter(0)}
        </span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <UseRef />
    </>
  );
}

export default App;
