import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function RenderCount() {
  const countObject = useRef(1);
  useEffect(() => {
    countObject.current = countObject.current + 1;
  });
  return (
    <div>
      <p>{countObject.current}</p>
    </div>
  );
}

export default RenderCount;
