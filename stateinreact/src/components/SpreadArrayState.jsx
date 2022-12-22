import React from 'react';

function SpreadArrayState() {
  let listProducts = [
    { id: 1, item: 'Book', price: 34 },
    { id: 2, item: 'Pen', price: 34 },
    { id: 3, item: 'copy', price: 55 },
  ];
  const [list, setList] = React.useState(listProducts);
  const deleteAll = () => {
    setList([]);
  };
  //   useEffect(() => {
  //     console.log(
  //       'this render when component render if component render 10 time useEffect will call 10 times'
  //     );
  //   });
  //   useEffect(() => {
  //     console.log(
  //       'this render when component render change list if component list chamge 10 time useEffect will call 10 times'
  //     );
  //   },[list]); particular state change which pass in dependencies.
  // useEffect(()=>{},[]); this mean that our useEffect only call first time or one time
  const addOne = () => {
    // this will rerender our component and value changes show
    //if we will not use setter list change will not show
    setList([...list, { id: 4, item: 'card' }]);
  };
  return (
    <div>
      {list.map((item) => {
        return (
          <h1 key={item.id}>
            {item.id} {item.item}
          </h1>
        );
      })}
      <button onClick={deleteAll}>Delete All</button>
      <button onClick={addOne}>Add One</button>
    </div>
  );
}

export default SpreadArrayState;
