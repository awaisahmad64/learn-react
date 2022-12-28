import React from 'react';
import { useReducer } from 'react';
//hardcode value for const variable
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <center>
        <h1>Reducer Hook Example Here</h1>
        <button onClick={decrement}> -</button>
        <span>{state.count >= 0 ? state.count : (state.count = 0)}</span>
        <button onClick={increment}> +</button>
      </center>
    </div>
  );
}

export default ReducerHook;
