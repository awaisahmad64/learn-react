import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = showFunction(number);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <center>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br/>
      <button onClick={()=> setDark((prev)=> !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </center>
  );
}
function showFunction(num){
  console.log("calling show function")
  for (let index = 0; index <= 1000000000; index++) {
  }
  return num * 2;
}

export default App;
