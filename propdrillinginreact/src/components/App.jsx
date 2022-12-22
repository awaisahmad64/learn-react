import React from 'react';
import ChildA from './ChildA';

function App() {
  let name = 'Awais';
  return (
    <div>
      <ChildA name={name} />
    </div>
  );
}

export default App;
