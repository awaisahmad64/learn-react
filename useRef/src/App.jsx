import { useReducer } from 'react';
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <center>
        <h1>Use Reducer Example here</h1>
        <button onClick={decrement}>-</button>
        <span>{state.count >= 0?state.count : (state.count = 0)}</span>
        <button onClick={increment}>+</button>
      </center>
    </>
  );
}
export default App;
