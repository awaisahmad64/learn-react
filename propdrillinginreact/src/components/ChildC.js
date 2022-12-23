import React ,{useContext} from 'react';
import { data, data1 } from './App';

function ChildC() {
  const firstName = useContext(data);
  const lastName = useContext(data1);
  return (
    <>
      <h1>
        Welcome {firstName} {lastName}
      </h1>
    </>
  );
}

export default ChildC;
