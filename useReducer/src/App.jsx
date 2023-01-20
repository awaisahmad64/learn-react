import { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement':
      return {count:state.count -1};
    case 'increment':
      return {count:state.count +1};
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const decrement =()=>{
    dispatch({type:'decrement'})
  }
  const increment =()=>{
    dispatch({type:'increment'})
  }

  
  return (
    <>
      <center>
        <h1>UseReducer Here</h1>
        <button onClick={decrement}>-</button>
        <span>{state.count >= 0? state.count: (state.count=0)}</span>
        <button onClick={increment}>+</button>
      </center>
    </>
  );
}

export default App;
