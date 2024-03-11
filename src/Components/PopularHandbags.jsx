import React from 'react'

function PopularHandbags({name,price}) {
  return (
    <div className=''>
        
        <p className='name'>
            {name}
        </p>
        <p className='price'>
            {price}
        </p>
      
    </div>
  );
}

export default PopularHandbags;
