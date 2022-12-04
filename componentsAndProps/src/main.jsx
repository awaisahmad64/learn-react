import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App name="Awais Ahmad" componentCallNo='component call 1' />
    <App name="M Tayyab Fazal Karim" componentCallNo='component call 2' />
    <App name="M Abbas Fazal Karim" componentCallNo='component call 3' />
  </div>
);
