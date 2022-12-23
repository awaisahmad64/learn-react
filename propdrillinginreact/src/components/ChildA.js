import React, { useState } from 'react';
import { useMemo } from 'react';
import ChlidB from './ChlidB';

function ChildA() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multipulication = useMemo(
    function mul() {
      console.log('mul run');
      return add * 4;
    },[add]
  );
  return (
    <div>
      <ChlidB />
      <h1>Learm useMemo</h1>
      {multipulication}
      <br />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Add
      </button>
      <p>{add}</p>
      <button
        onClick={() => {
          setMinus(minus - 1);
        }}
      >
        Minus
      </button>
      <p>{minus}</p>
    </div>
  );
}

export default ChildA;
