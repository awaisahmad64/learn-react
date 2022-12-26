import { useState } from 'react';
import LifeCycle from './LifeCycle';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <LifeCycle />
    </div>
  );
}
export default App;
