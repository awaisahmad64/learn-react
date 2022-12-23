import React from 'react';
import { data, data1 } from './App';

function ChildC() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <>
              <data1.Consumer>
                {(lastName) => {
                  return (
                    <h1>
                      Welocme {name} {lastName}
                    </h1>
                  );
                }}
              </data1.Consumer>
            </>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildC;
