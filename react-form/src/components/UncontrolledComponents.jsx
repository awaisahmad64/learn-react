import React from 'react';
import { useRef } from 'react';

function UncontrolledComponents() {
  const refObject = useRef();
  function submit(e) {
    e.preventDefault();
    alert(refObject.current.textContent);
  }
  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input ref={refObject} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input />
          </div>
          <button type="submit">submit</button>
        </form>
      </center>
    </div>
  );
}

export default UncontrolledComponents;
