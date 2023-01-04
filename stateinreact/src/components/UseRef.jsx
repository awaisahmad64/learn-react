import React, { useState, useEffect,useRef } from 'react';

function UseRef() {
  const [name, setName] = useState('');
  const counterObject = useRef(0);
  useEffect(() => {
    // setCounter((prev) => prev + 1);
    counterObject.current = counterObject.current +1;
  })
  return (
    <div>
      <form>
        <input onChange={(e) => setName(e.target.value)} />
        <p>Name:{name}</p>
        <p>Counter : {counterObject.current}</p>
      </form>
    </div>
  );
}

export default UseRef;
