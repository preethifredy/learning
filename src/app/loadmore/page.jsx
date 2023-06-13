'use client'
import React, { useState } from 'react';

const Example = () => {
  const [length, setLength] = useState(1);

  const loadmore = () => {
    setLength((prevLength) => prevLength + 1);
  };

  const divs = Array.from({ length }).map((value, i) => {
    i *= 3;
  
    return (
      <div key={i}>
        <div>{i + 1}</div>
        <div>{i + 2}</div>
        <div>{i + 3}</div>
        
      </div>
    );
  });

  return (
    <div>
      {divs}
      <input type="button" onClick={loadmore} value="Load More" />
    </div>
  );
};

export default Example;
