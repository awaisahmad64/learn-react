import React, { createContext } from 'react';
import ChildA from './ChildA';

const data = createContext();
function App() {
  let name = 'Awais';
  return (
    <>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </>
  );
}
export default App;
export {data};
