import React from 'react';
import ReactDOM from 'react-dom/client';
function Main(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{props.dateProps.toLocaleTimeString()}</p>
    </div>
  );
}
// function tick() {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <Main date={new Date()} />
//   );
// }
// setInterval(tick, 1000);
export default Main
