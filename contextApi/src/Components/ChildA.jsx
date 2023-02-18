import React, { createContext } from 'react';
import ChildB from './ChildB';
import ChildE from './ChildE';
const data = createContext();
const dataOne = createContext();
function ChildA() {
  const someData = 'send this message Child A to Child E';
  const someDataOne = 'Send second message Child A into child E';
  return (
    <div>
      ChildA
      <ChildB />
      <data.Provider value={someData}>
        <dataOne.Provider value={someDataOne}>
          <ChildE />
        </dataOne.Provider>
      </data.Provider>
    </div>
  );
}

export default ChildA;
export { data, dataOne };
