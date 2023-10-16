import React from 'react'
import "./card.css"

export default function Card(data) {
  return (
    <div className='main'>
    {data?.data?.products?.map((value, index) => (
        <div class="products">
            <div class="productImg"><img class ="imgDiv" src = {value.images[0]}/></div>     
            <p class="productName">Name: ${value.title}</p>
            <p class="productID">Id: ${value.id}</p>
            <p class="productDesc">Description: ${value.description}</p>
        </div>
      ))}
    </div>
  );
}
