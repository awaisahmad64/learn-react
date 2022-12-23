import React, { createContext } from 'react';
import ChildA from './ChildA';
import PrevState from './PrevState';

const data = createContext();
const data1 = createContext();
function App() {
  let name = 'Awais';
  let lastName = 'Ahmad';
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={lastName}>
          <ChildA />
          <PrevState/>
        </data1.Provider>
      </data.Provider>
    </>
  );
}
export default App;
export { data, data1 };
