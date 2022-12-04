import react from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Awais',
  lastName: 'Ahmad',
};
function tick() {
  const element = (
    <div style={{ display:'flex', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <p style={{padding:'0 100px'}}>React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.</p>
      <p style={{padding:'0 100px',color:'#ffc107'}}>Note: You can verify by inspecting the last example with the browser tools and You will see the only h3 time is updating.This is actually virtual dom.</p>

      <span style={{ display:'block'}}>{formatName(user)}</span>
      <h3 style={{ color:'green'}}>{new Date().toLocaleTimeString()}</h3>
    </div>
  );
  root.render(<h1>{element}</h1>);
}
setInterval(tick, 1000);
