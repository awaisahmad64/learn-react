import { useEffect, useLayoutEffect, useRef, useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();
  useLayoutEffect(() => {
    if (popup.current === null || button.current === null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = ` ${bottom + 25}px `
  },[show]);
  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Cleck Here
      </button>
      {show && (
        <div style={{ position: 'absolute' }} ref={popup}>
          This is popup
        </div>
      )}
    </>
  );
}

export default App;
