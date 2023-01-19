import React from 'react';
import { useState } from 'react';

function MultipeFieldData() {
  const [inputData, setInputData] =useState({
    name: '',
    password: '',
    email: '',
    address: '',
  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <center>
      <h1>Multiple input field data control</h1>
      <form onSubmit={submitHandle}>
        <div>
          <div>Name</div>
          <input type="text" name="name" onChange={inputHandle} />
        </div>
        <div>
          <div>Password</div>
          <input type="text" name="password" onChange={inputHandle} />
        </div>
        <div>
          <div>Email</div>
          <input type="text" name="email" onChange={inputHandle} />
        </div>
        <div>
          <div>Address</div>
          <textarea name="address" onChange={inputHandle}></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </center>
  );
}

export default MultipeFieldData;
