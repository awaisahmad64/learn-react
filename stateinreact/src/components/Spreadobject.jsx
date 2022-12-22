import React, { useState } from 'react';

function Spreadobject() {
  const [list, setList] = useState({ id: 1, item: 'Book', itemPrice: 300 });
  const updateList = () => {
    // setList({ item: 'Pen' }); this override all object properties with pen
    // setList({ id: 1, item: 'Pen', itemPrice: 300 }); this will override onle item but not propure solutions bulk products
    setList({...list,item:"Pen"})
  };
  return (
    <div>
      <h3>useState object with spread operator [...]</h3>
      <p>{list.item}</p>
      <p>{list.itemPrice}</p>
      <button onClick={updateList}>update</button>
    </div>
  );
}

export default Spreadobject;
