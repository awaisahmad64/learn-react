import React, { useState, useEffect } from 'react';

function UseRef() {
  const [name, setName] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter((prev) => prev + 1);
  });
  return (
    <div>
      <form>
        <input onChange={(e) => setName(e.target.value)} />
        <p>Name:{name}</p>
        <p>Counter : {counter}</p>
      </form>
    </div>
  );
}

export default UseRef;
