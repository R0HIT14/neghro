import React from 'react';
import { useState } from 'react';
import Products from '../Products';

export default function Category({ data }) {

  const [buttonText, setButtonText] = useState('');

  const handleClick = (event) => {
    const buttonText = event.target.textContent;
    setButtonText(buttonText);
  };

  // console.log(`categories/${buttonText.toLowerCase()}`)
  return (
    <div>
      {data.map((value, index) => (
        <button key={index} onClick={handleClick}>{value.toUpperCase()}</button>
      ))}
      <Products uri = {`products/category/${buttonText.toLowerCase()}`}/>
    </div>
  );
}
