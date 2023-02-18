import React, { useContext } from 'react';
import { data, dataOne } from './ChildA';

function ChildE() {
  const first = useContext(data);
  const msg = useContext(dataOne);

  return (
    <div>
      <p>{first} </p>
      <p> {msg}</p>
    </div>
  );
}

export default ChildE;
