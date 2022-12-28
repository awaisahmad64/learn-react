import React, { useState } from 'react';
import ReducerHook from './ReducerHook';
import RenderCount from './RenderCount';
import UncontrolledComponents from './UncontrolledComponents';
// controlled component controlled by react
function ControlledComponents() {
  const [formInputData, setFormInputData] = useState({
    name: '',
    password: '',
  });
  const formDataHandler = (e) => {
    console.log(e.target);
    let { name, value } = e.target;
    // e.target is input object have name and value and we are destructuring  object, name will store the name value like in first case it will be name and second it will be password, we structure our state object same as we use in form handling. you can also destruct type let {name,value,type} =e.target;
    // you can check log, console.log(name,value,type)
    setFormInputData((prev) => {
      /*let name = 'name';
      let value = 'Awais';
      const obj = {
      [name]: value,
    };
      console.log(obj);
      The square brackets in the expression are used to create a computed property name in an object literal. Computed property names allow you to put an expression in brackets '[]'.
    */
      return { ...prev, [name]: value };
    });
  };
  function submit(e) {
    e.preventDefault();
    console.log(formInputData);
  }
  return (
    <div>
      <center>
        <h1>Controlled Component</h1>
        <p>Which controlled by react</p>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              name="name"
              type="text"
              value={formInputData.name}
              onChange={formDataHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              name="password"
              type="text"
              value={formInputData.password}
              onChange={formDataHandler}
            />
          </div>
          <button type="submit">submit</button>
        </form>
        <h1>Uncontrolled Component</h1>
        <p>Which controlled by direct DOM</p>
      </center>
      <UncontrolledComponents />
      <center>
        Component Render
        <RenderCount />
        Times
      </center>
      <ReducerHook />
    </div>
  );
}

export default ControlledComponents;
