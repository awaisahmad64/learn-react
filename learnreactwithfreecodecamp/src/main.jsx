import React from 'react';
import ReactDOM from 'react-dom/client';
import Commentinjsx from './jsx/Commentinjsx';
{
  /* Render html element to the DOM */
}
const JSX = (
  <div id="root">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.createRoot(document.getElementById('root')).render(JSX);
