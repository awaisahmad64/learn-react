import { useState } from 'react';
import classNames from 'classnames';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h1 className="text-center mx-2">
        Conditional Styling using <b>ClassName</b> package in ReactJs
      </h1>
      <div className="box">
        <p className="title text-center" onClick={toggle}>
          Click Me! <span className={classNames('iconPosition',{'plusNotShow':isOpen})}><b>+</b></span><span className={classNames('iconPositionMinus',{'minusNotShow':!isOpen})}><b>-</b></span>
        </p>
        <div
          className={classNames('description', {
            'description-active': isOpen,
          })}
        >
          The total number of items returned by the hook should remain constant.
          This will avoid resizing our pagination component if the length of the
          range array changes while the user is interacting with the component.
        </div>
      </div>
    </>
  );
}

export default App;
