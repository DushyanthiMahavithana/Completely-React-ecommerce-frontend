import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Shop.css'

function PopularBackpacks({image,name,price}) {
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
        <Link to="/#">
          <button className='btn'>LATEST DESIGNS</button>
        </Link>
      </div>
    </div>
  );
}

export default PopularBackpacks;
