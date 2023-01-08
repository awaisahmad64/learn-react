import React, { useState } from 'react';
//child
const Callback = (props) => {
  const [activeColor, setactiveColor] = useState('');
  const handlerChange = (e) => {
    const { value } = e.target;
    setactiveColor(value);
    props.getColor(value);
  };
  return (
    <>
    <h3>Enter the background color for above box</h3>
    <input
    
      type="text"
      id="input"
      value={activeColor}
      onChange={handlerChange}
    />
    </>
  );
};

export default Callback;
