import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Shop.css'

function PopularHandbags({image,name,price}) {
  return (
    <div className='bagBox'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <div className='boxDetails'>
        <p className='name'>
            {name}
        </p>
        <p className='price'>
            Rs {price}
        </p>
      </div>
    </div>
  );
}

export default PopularHandbags;
