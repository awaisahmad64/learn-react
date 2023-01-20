import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";

function NavScrollExample() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        { isAuthenticated? (<div>
          <img className='rounded-circle' src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="btn btn-outline-info mx-3" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> </div>):(<button className="btn btn-outline-success" onClick={() => loginWithRedirect()}>Log In</button>)}
        
        
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavScrollExample