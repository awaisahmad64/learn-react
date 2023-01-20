import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-0d08u1jgq7vs2e84.us.auth0.com"
    clientId="RKj4HrErultl3oJhkkixKilNSv4um12l"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
//Domain =dev-0d08u1jgq7vs2e84.us.auth0.com
//clinet id =RKj4HrErultl3oJhkkixKilNSv4um12l
//
