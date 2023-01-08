import { useState } from 'react';
import Callback from './Callback';
//parent
function App() {
  const [UIColor, setUIColor] = useState('');
  // our callback function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <center>
      <div
        style={{
          width: '300px',
          height: '200px',
          border: '1px solid gray',
          background: `${UIColor}`,
        }}
      >
        Color
      </div>
      <Callback getColor={getColor} />
    </center>
  );
}
export default App;
